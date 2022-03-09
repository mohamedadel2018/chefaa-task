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
                                        <h3 class="card-title-rtl">pharmacy</h3>

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
                                    <el-button type="primary" class="mt-2 " round    @click.prevent="dialogaddproductVisible = true"  icon="el-icon-plus"> Add Pharmacy</el-button>

                        <el-dialog
                            :visible.sync="dialogaddproductVisible"
                            width="40%"
                            :before-close="handleClose">


                            <h4> Add New pharmacy</h4>

                            <el-form>


                            
                              
                                  

                                   
                                    <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Name</span>
                                            <el-input placeholder="name" v-model="addpharmacyform.name" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['addpharmacyform.name']">
                                                {{errors['addpharmacyform.name'][0]}}
                                            </span>
                                    </el-form-item>


                                    <hr >
                                

                                        <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Location</span>
                                            <el-input type="textarea" placeholder="Location" v-model="addpharmacyform.location" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['addpharmacyform.location']">
                                                {{errors['addpharmacyform.location'][0]}}
                                            </span>
                                    </el-form-item>


                                   

                            
                            </el-form>
                            <button   @click.prevent="addpharmacies()"  class="btn btn-primary   col-md-12  d-flex justify-content-center"> Submit</button>

                        </el-dialog>
                    </div>
                 </div>

                             <el-table
                            v-loading='dialogetable'
                                :data="pharmacies.data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())) "
                                style="width: 100%">
                                <el-table-column
                                    prop="id"
                                     align= "center"
                                    label="ID"
                                    width="80">
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
                                    label="Location"
                                    >
                                    <template slot-scope="scope">
                                        <span> {{ scope.row.location.substring(0,25,)+'..'}}</span>
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
                                    placeholder="Name Search"/>
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


                                    <h4> Edite pharmacy</h4>

                                    <el-form >
                                    <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Name</span>
                                            <el-input placeholder="name" v-model="Editpharmacyform.name" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['Editpharmacyform.name']">
                                                {{errors['Editpharmacyform.name'][0]}}
                                            </span>
                                    </el-form-item>


                                    <hr >
                                

                                        <el-form-item  class="mb-4">
                                            <span class="demonstration block ">Location</span>
                                            <el-input type="textarea" placeholder="Location" v-model="Editpharmacyform.location" clearable required></el-input>
                                            <span class="text-danger" v-if="errors['Editpharmacyform.location']">
                                                {{errors['Editpharmacyform.location'][0]}}
                                            </span>
                                    </el-form-item>



                                     

                                    </el-form>




                                    <button   @click.prevent="editpharmacy(Editpharmacyform)"  class="btn btn-primary  mt-4 col-md-12  d-flex justify-content-center"> Submit</button>
                                        <span slot="footer" class="dialog-footer">
                                        </span>
                                    </el-dialog>


                                    </div>
                                   </template>
                            </el-table-column>


                                </el-table>

                            <ul class="mb-4 mt-4 text-xs">
                                    <pagination :data="pharmacies" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
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
                                            {{Showpharmacyform.id}}
                                    </span>
                                </div>
                            </div>


                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                   Name
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            {{Showpharmacyform.name}}
                                    </span>
                                </div>
                            </div>




                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    Location
                                </div>
                                <div class="col-md-6 ml-4">
                                    <span >
                                            {{Showpharmacyform.location}}
                                    </span>
                                </div>
                            </div>


<!-- 
                            <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    pharmacies
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                
                                               <el-table
                                            v-loading='dialogetable'
                                                :data="Showpharmacyform.pharmacy"
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
                            </div> -->


                             <div class="row mt-4">
                                <div class="col-md-2 ml-2">
                                    Created at
                                </div>
                                <div class="col-md-9 ml-4">
                                    <span >
                                            {{Showpharmacyform.created_at | timeFormat}}
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
        pharmacies:{},
        addpharmacyform:{},
        Editpharmacyform:{},
        Showpharmacyform: {},
        dialogetable: true,
        dialogeditProductVisible: false,

        dialogaddproductVisible: false,
        errors: {},
        showTable:true,
        }
    },
    methods: {

    getpharmacies(){
            this.dialogetable = false
        axios.get('/api/apipharmacies').then(res => { this.pharmacies = res.data;
      
        }).catch(err =>{ console.log(err); });
    },

    addpharmacies(){
           let {addpharmacyform} = this;
         axios.post('/api/apipharmacies',{addpharmacyform}).then(res => { 

             this.dialogaddproductVisible = false;
             this.getpharmacies();

             this.$notify({
                          title: 'Success',
                          message: 'Added Done',
                          type: 'success'
                          });

            this.addpharmacyform = {};
     
        }).catch(err =>{ console.log(err); });
    },


      editpharmacy(Editpharmacyform){
           
        axios.put(`/api/apipharmacies/${Editpharmacyform.id}`,{Editpharmacyform}).then(res => { 
             this.dialogeditProductVisible = false
              this.getpharmacies();


                 this.$notify({
                          title: 'Success',
                          message: 'Updated Done',
                          type: 'success'
                          });


                this.Editpharmacyform = {};

        }).catch(err =>{ console.log(err); });
    },


    // deleteProduct(id){
    //         this.dialogetable = false
    //     axios.delete(`/api/apipharmacies/${id}`).then(res => { 
    //             this.getpharmacies();
    //          this.$notify({
    //                       title: 'Success',
    //                       message: 'Deleted Done',
    //                       type: 'success'
    //                       });

       
    //     }).catch(err =>{ console.log(err); });
    // },


    
        deleteProduct(row) {
          
         console.log(row.id);
         
                  this.$confirm('Are you Sure you want Deleted this pharmacy', 'Warning', {
                            confirmButtonText: 'OK',
                            cancelButtonText: 'Cancel',
                            type: ''
                            }).then(() => {
                                  
                                 axios.delete(`/api/apipharmacies/${row.id}`).then(res => { 
                                            this.getpharmacies();
                                            this.$notify({
                                                        title: 'Success',
                                                        message: 'Deleted Done',
                                                        type: 'success'
                                                        });

                                    
                                        }).catch(err =>{ console.log(err); });
                            }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: 'Delete canceled'
                            });
                            });
                       

                },



    HandeleditProduct(index,row){
          this.dialogeditProductVisible = true;

          this.Editpharmacyform = row;
    },
        
    getResults(page = 1) {
        axios.get('/api/apipharmacies?page=' + page)
            .then(response => {
                this.pharmacies  = response.data;
                //  console.log('dd',response.data);
                });
            },



        handleShowproduct( row){
                this.showTable = false;
                // console.log(index, row);
                this.Showpharmacyform = row;

               
               
                        
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

    },
    created(){

      this.getpharmacies();

           }
  }
</script>