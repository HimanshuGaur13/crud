<template>
    <div>
      <h2>Employee Registation</h2>
<form @submit.prevent="save">
  <div class="form-group">
    <label>Employee name</label>
    <input type="text" v-model="employee.name" name="name"  class="form-control"  placeholder="Employee name">
  
  </div>
  <div class="form-group">
    <label>Employee Address</label>
    <input type="text" v-model="employee.address" name="address"  class="form-control"  placeholder="Employee Address">
  
  </div>
 
  <div class="form-group">
    <label>Mobile</label>
    <input type="text" v-model="employee.phone" name="phone"  class="form-control"  placeholder="Mobile">
  
  </div>
 
  <button type="submit" class="btn btn-primary">Save</button>
</form>
 
 
      <h2>Employee View</h2>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in result" v-bind:key="employee._id">
          
          <td>{{ employee._id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.phone }}</td>
          <td>
            <button type="button" class="btn btn-warning" @click="edit(employee)">Edit</button>
            <button type="button" class="btn btn-danger"  @click="remove(employee)">Delete</button>
          </td>
        </tr>
    
  </tbody>
</table>
    
    </div>
  </template>
  
  <script>
   
    import axios from 'axios';
 
   
 
 
  export default {
    name: 'EmployeeCrud',
    data () {
      return {
        result: {},
        employee:{
                   
                   name: '',
                   address: '',
                   phone: ''
 
 
        }
      }
    },
    created() {
        this.EmployeeLoad();
    },
    mounted() {
          console.log("mounted() called.......");
        
      },
 
    methods: {
           EmployeeLoad()
           {
                 var page = "http://localhost:4504/user/getAll";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.result = data.data;
                      }
                  );
           },
          
          
 
 
 
 
           save()
           {
            if(this.employee)
              {
                this.saveData();
              }
              else
              {
                this.updateData();
              }      
 
           },
           saveData()
           {
            console.log("data to be saved",this.employee)

            axios.post("http://localhost:4504/user/create", this.employee)
            .then(
              ({data})=>{
                alert(`saveddddd ${data}`);
                this.EmployeeLoad();
              }
            )
 
           },
           edit(employee)
           {
            this.employee = employee;
          
           },
           updateData()
           {
              var editrecords = 'http://localhost:4504/user/update/'+ this.employee._id;
              axios.patch(editrecords, this.employee)
              .then(
                ({data})=>{
                  this.employee.name = '';
                  this.employee.address = '',
                  this.employee.phone = ''
                  this.id = ''
                  alert(`updated!!! ${data}`);
                  this.EmployeeLoad();
                }
              );
 
           },
 
           remove(employee){
             var url = `http://localhost:4504/user/delete/${employee._id}`;
              axios.delete(url);
              alert("Deleteddd");
              this.EmployeeLoad();
            }
      }
  }
  </script>