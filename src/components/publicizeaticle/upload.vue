<template>
	<div>
		<el-upload
		  action="http://localhost:8089/rememberme/uploadFile"
		  list-type="picture-card"
		  :on-preview="handlePictureCardPreview"
		  :on-remove="handleRemove"
			name="img"
			:on-success="successUpload"
			:limit="1">
		  <i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>

<script>
  export default {
    data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false
          };
        },
        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
					successUpload(res){
						this.$emit("getheadimg",res.data);
					}
        }
  }
</script>

<style>

</style>
