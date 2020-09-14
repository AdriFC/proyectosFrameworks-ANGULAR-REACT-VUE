<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Article from "../models/Article";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      file: "",
      article: new Article("", "", null, ""),
      submited: false,
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId){
            axios.get(this.url + 'article/' + articleId).then (res => {
                if(res.data.status == 'success'){
                    this.article = res.data.article;
                }
            });
        },
    save() {
      this.submited = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then((response) => {
            if (response.data.status == "success") {
              //Subida del archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);
                var articleId = response.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((response) => {
                    if (response.data.article) {
                      swal(
                        "Artículo creado",
                        "El artículo se ha creado correctamente",
                        "success"
                      );
                      this.article = response.data.article;
                      this.$router.push("/blog");
                    } else {
                      swal(
                        "Artículo no creado",
                        "El artículo no se ha creado correctamente",
                        "error"
                      );
                      this.article = response.data.article;
                      this.$router.push("/blog");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo creado",
                  "El artículo se ha creado correctamente",
                  "success"
                );
                this.article = response.data.article;
                this.$router.push("/blog");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>