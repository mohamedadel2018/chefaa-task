<template>
    <div>
        

<section class="content" >
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                      <div class="card card-purple">
                      <div class="card-header">
                             <div class="row">
                                  <div class="col-md-10">
                                        <h3 class="card-title-rtl">Product</h3>

                                  </div>

                                  <div  class="col-md-1">
                                        <el-button type="primary" class="text-sm " size="small"  title="Back" v-show="showTable == false"  @click.prevent="showTable = true" icon="el-icon-back" plain></el-button>
                                </div>
                                
                           </div>
                      </div>
                      <div class="row">
                      <div class="col-md-12">
                         <button class="btn btn-default mt-4  ml-4  not-print" onclick={window.print()}><i class="fa fa-print" aria-hidden="true"></i> Print </button>
                      </div>
                      
                      </div>

                      <div class="card-body"  v-show="showTable">

                          <div class="row">
                                <div  class="col-md-10 mb-4" >
                                    <el-button type="primary" class="mt-2 " round    @click.prevent="dialogaddproductVisible = true"  icon="el-icon-plus"> Add Product</el-button>

                                      <el-button type="primary" class="mt-2 " round    @click.prevent="dialogaddproductTopharmacyVisible = true"  icon="el-icon-plus"> Add product to pharmacy</el-button>

                        <el-dialog
                            :visible.sync="dialogaddproductVisible"
                            width="40%"
                            :before-close="handleClose">


                            <h4> Add New Product</h4>

                            <el-form>


                            
                              
                                  

                                   
                                    <el-form-item  class="mb-4">
                                            <span class="demonstration block ">title</span>
                                            <el-input placeholder="title" v-model="addproductform.title" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['addproductform.title']">
                                                {{errors['addproductform.title'][0]}}
                                            </span>
                                    </el-form-item>


                                    <hr >
                                

                                        <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Description</span>
                                            <el-input type="textarea" placeholder="Description" v-model="addproductform.description" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['addproductform.description']">
                                                {{errors['addproductform.description'][0]}}
                                            </span>
                                    </el-form-item>


                                    

                            
                            </el-form>
                            <button   @click.prevent="addproducts()"  class="btn btn-primary   col-md-12  d-flex justify-content-center"> Submit</button>

                        </el-dialog>




                             <el-dialog
                            :visible.sync="dialogaddproductTopharmacyVisible"
                            width="40%"
                            :before-close="handleClose">


                            <h4> Add New Product</h4>

                            <el-form>


                            
                              
                                  <el-form-item  class="mb-4">
                                        <div class="col-md-12 ">
                                        <span class="demonstration  block">products</span>
                                           <el-select class="d-flex"  v-model="addproductTopharmacyform.products_id"  placeholder="pharmacies">
                                            <el-option
                                              v-for="product in  allproducts"
                                              :label="product.title"
                                              :value="product.id"
                                               :key="product.id"
                                              clearable>
                                            </el-option>
                                          </el-select>
                                        
                                        <span class="text-danger" v-if="errors['addproductTopharmacyform.products_id']">
                                          <span class="block"> {{errors['addproductTopharmacyform.products_id'][0]}}</span>
                                    </span>
                                    </div>
                                    </el-form-item>
                                    

                                <el-form-item  class="mb-4">
                                        <div class="col-md-12 ">
                                        <span class="demonstration  block">pharmacies</span>
                                           <el-select class="d-flex"  v-model="addproductTopharmacyform.pharmacie_id"  placeholder="pharmacies">
                                            <el-option
                                              v-for="pharmacy in  pharmacies"
                                              :label="pharmacy.name"
                                              :value="pharmacy.id"
                                               :key="pharmacy.id"
                                              clearable>
                                            </el-option>
                                          </el-select>
                                        
                                        <span class="text-danger" v-if="errors['addproductTopharmacyform.pharmacie_id']">
                                          <span class="block"> {{errors['addproductTopharmacyform.pharmacie_id'][0]}}</span>
                                    </span>
                                    </div>
                                    </el-form-item>

                                   
                                    <el-form-item  class="mb-4">
                                            <span class="demonstration block ">price</span>
                                            <el-input type="number" placeholder="price" v-model="addproductTopharmacyform.price" clearable ></el-input>
                                            <span class="text-danger" v-if="errors['addproductTopharmacyform.price']">
                                                {{errors['addproductTopharmacyform.price'][0]}}
                                            </span>
                                    </el-form-item>
                            
                            </el-form>
                            <button   @click.prevent="addproductTopharmacyFun()"  class="btn btn-primary   col-md-12  d-flex justify-content-center"> Submit</button>

                        </el-dialog>
                    </div>
                 </div>

                             <el-table
                            v-loading='dialogetable'
                                :data="products.data.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase())) "
                                style="width: 100%">
                                <el-table-column
                                    prop="id"
                                     align= "center"
                                    label="ID"
                                    width="80">
                                </el-table-column>

                                <el-table-column
                                    prop="title"
                                     align= "center"
                                    label="Title"
                                   >
                                </el-table-column>



                                 <el-table-column
                                    prop="description"
                                     align= "center"
                                    label="Description"
                                    >
                                    <template slot-scope="scope">
                                        <span> {{ scope.row.description.substring(0,25,)+'..'}}</span>
                                    </template>
                                </el-table-column>

                            




                               
                             <el-table-column
                                label="Created at"
                                align= "center">
                                    <template slot-scope="scope">
                                      <span> {{scope.row.created_at | timeFormat}} </span>
                                    </template>
                                </el-table-column>


                                
                                 <el-table-column
                                align="center">
                                <template slot="header" slot-scope="scope">
                                    <el-input
                                    :title="scope.$index"
                                    v-model="search"
                                    size="mini"
                                    placeholder="Title Search"/>
                                </template>

                               <template slot-scope="scope">
                                <div class="block">


                                        <el-button
                                         size="small"
                                        type="light"
                                        class="p-0 m-1"
                                        style="border: none;"
                                        @click.prevent="handleShowproduct( scope.row)"  ><i class="fas fa-eye text-lg"></i></el-button>


                                        <el-button
                                         size="small"
                                        type="light"
                                        class="p-0 m-1"
                                        style="border: none;"
                                        @click.prevent="HandeleditProduct(scope.$index, scope.row)"  ><i class="el-icon-edit text-lg"></i></el-button>
                                      


                                    <el-button
                                        size="small"
                                        type="light"
                                        class="p-0 m-1"
                                        style="border: none;"
                                        @click="deleteProduct( scope.row)"  ><i class="el-icon-delete text-lg" style="color:red;" ></i></el-button>



                                  <el-dialog
                                    :visible.sync="dialogeditProductVisible"
                                    width="40%"
                                    >


                                    <h4> Edite Product</h4>

                                    <el-form >
                                    <el-form-item  class="mb-4">
                                            <span class="demonstration block ">title</span>
                                            <el-input placeholder="title" v-model="EditProductform.title" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['EditProductform.title']">
                                                {{errors['EditProductform.title'][0]}}
                                            </span>
                                    </el-form-item>


                                    <hr >
                                

                                        <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Description</span>
                                            <el-input type="textarea" placeholder="Description" v-model="EditProductform.description" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['EditProductform.description']">
                                                {{errors['EditProductform.description'][0]}}
                                            </span>
                                    </el-form-item>



                                     

                                    </el-form>




                                    <button   @click.prevent="editProduct(EditProductform)"  class="btn btn-primary  mt-4 col-md-12  d-flex justify-content-center"> Submit</button>
                                        <span slot="footer" class="dialog-footer">
                                        </span>
                                    </el-dialog>


                                    </div>
                                   </template>
                            </el-table-column>


                                </el-table>

                            <ul class="mb-4 mt-4 text-xs">
                                    <pagination :data="products" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                                          <span slot="prev-nav">&lt; Previous </span>
                                         <span slot="next-nav"> Next  &gt;</span>
                                    </pagination>
                            </ul>
                     </div>



                      <div class="card-body" v-show="showTable == false">


                          <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    ID
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            {{ShowProductform.id}}
                                    </span>
                                </div>
                            </div>


                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                   Title
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            {{ShowProductform.title}}
                                    </span>
                                </div>
                            </div>




                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    Description
                                </div>
                                <div class="col-md-6 ml-4">
                                    <span >
                                            {{ShowProductform.description}}
                                    </span>
                                </div>
                            </div>



                            <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    pharmacies
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            <!-- {{ShowProductform.pharmacie.pivot}} -->


                                            <!-- <div v-for="(pharmacie,p)  in  ShowProductform.pharmacie"  :key="p"> {{pharmacie.pivot}}</div> -->


                                               <el-table
                                            v-loading='dialogetable'
                                                :data="ShowProductform.pharmacie"
                                                  border
                                                style="width: 100%">
                                                <el-table-column
                                                    prop="id"
                                                    align= "center"
                                                    label="ID"
                                                   >
                                                </el-table-column>

                                                <el-table-column
                                                    prop="name"
                                                    align= "center"
                                                    label="Name"
                                                    >
                                                </el-table-column>



                                                <el-table-column
                                                    prop="location"
                                                    align= "center"
                                                    label="location"
                                                    >
                                                </el-table-column>


                                                 <el-table-column
                                                    prop="location"
                                                    align= "center"
                                                    label="price"
                                                    >
                                                    <template slot-scope="scope">
                                                        {{scope.row.pivot.price}} $
                                                    </template>
                                                </el-table-column>


                                                <el-table-column
                                                    label="Created at"
                                                    align= "center">
                                                        <template slot-scope="scope">
                                                        <span> {{scope.row.created_at | timeFormat}} </span>
                                                        </template>
                                                    </el-table-column>

                                               </el-table>
                                    </span>
                                </div>
                            </div>


                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    Created at
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            {{ShowProductform.created_at | timeFormat}}
                                    </span>
                                </div>
                            </div>

                     </div>

     
                      </div>
                    </div>
               
               
                </div>
        </div>
      </section>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        search:'',
        products:{},
        addproductform:{},
        EditProductform:{},
        ShowProductform: {},
        dialogetable: true,
        dialogeditProductVisible: false,



        addproductTopharmacyform:{},
        dialogaddproductVisible: false,
        dialogaddproductTopharmacyVisible:false,
        errors: {},
        showTable:true,

        pharmacies: {},
        allproducts:{},
        }
    },
    methods: {

    getproducts(){
            this.dialogetable = false
        axios.get('/api/apiproducts').then(res => { this.products = res.data;
      
        }).catch(err =>{this.errors = err.response.data.errors; });
    },

    addproducts(){
           let {addproductform} = this;
         axios.post('/api/apiproducts',{addproductform}).then(res => { 

             this.dialogaddproductVisible = false;
             this.getproducts();

             this.$notify({
                          title: 'Success',
                          message: 'Added Done',
                          type: 'success'
                          });

            this.addproductform = {};
     
        }).catch(err =>{this.errors = err.response.data.errors; });
    },


    addproductTopharmacyFun(){
           let {addproductTopharmacyform} = this;
         axios.post('/api/addproductTopharmacy',{addproductTopharmacyform}).then(res => { 

             this.dialogaddproductTopharmacyVisible = false;
             this.getproducts();

             this.$notify({
                          title: 'Success',
                          message: 'Added Done',
                          type: 'success'
                          });

            this.addproductTopharmacyform = {};
     
        }).catch(err =>{this.errors = err.response.data.errors; });
    },


      editProduct(EditProductform){
           
        axios.put(`/api/apiproducts/${EditProductform.id}`,{EditProductform}).then(res => { 
             this.dialogeditProductVisible = false
              this.getproducts();


                 this.$notify({
                          title: 'Success',
                          message: 'Updated Done',
                          type: 'success'
                          });


                this.EditProductform = {};

        }).catch(err =>{this.errors = err.response.data.errors; });
    },


    // deleteProduct(id){
    //         this.dialogetable = false
    //     axios.delete(`/api/apiproducts/${id}`).then(res => { 
    //             this.getproducts();
    //          this.$notify({
    //                       title: 'Success',
    //                       message: 'Deleted Done',
    //                       type: 'success'
    //                       });

       
    //     }).catch(err =>{this.errors = err.response.data.errors; });
    // },


    
        deleteProduct(row) {
          
         console.log(row.id);
         
                  this.$confirm('Are you Sure you want Deleted this product', 'Warning', {
                            confirmButtonText: 'OK',
                            cancelButtonText: 'Cancel',
                            type: ''
                            }).then(() => {
                                  
                                 axios.delete(`/api/apiproducts/${row.id}`).then(res => { 
                                            this.getproducts();
                                            this.$notify({
                                                        title: 'Success',
                                                        message: 'Deleted Done',
                                                        type: 'success'
                                                        });

                                    
                                        }).catch(err =>{this.errors = err.response.data.errors; });
                            }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: 'Delete canceled'
                            });
                            });
                       

                },



    HandeleditProduct(index,row){
          this.dialogeditProductVisible = true;

          this.EditProductform = row;
    },
        
    getResults(page = 1) {
        axios.get('/api/apiproducts?page=' + page)
            .then(response => {
                this.products  = response.data;
                //  console.log('dd',response.data);
                });
            },



        handleShowproduct( row){
                this.showTable = false;
                // console.log(index, row);
                this.ShowProductform = row;

               
               
                        
                //  this.addLeactureform  = row;
        console.log(  this.Showleactureform);
    },




         handleClose(done) {
          
        this.$confirm('Are you sure to close this dialog?')
                .then(_ => {
                    done();

                })
                .catch(_ => {});
           
      },


      getpharmacies(){
           axios.get('/api/getpharmacies')
            .then(response => {
                this.pharmacies  = response.data;
                 console.log('dd',this.pharmacies);
                });
            },


       getallproducts(){
           axios.get('/api/getallproducts')
            .then(response => {
                this.allproducts  = response.data;
                 console.log('dd',this.allproducts);
                });
            },
     

    },
    created(){

      this.getproducts();

    this.getallproducts();
      this.getpharmacies();

           }
  }
</script>