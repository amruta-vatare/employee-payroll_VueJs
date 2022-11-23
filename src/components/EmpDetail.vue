<template>
    <div class="main-content">
        <div class="header-content">
            <div class="emp-detail-text">
                Employee Details <div class="emp-count">10</div>
            </div>
            <router-link to="/addemppayroll" class="add-button"><img src="../assets/photos/plus-math.png"  height="20px" width="20px" alt="">Add User</router-link>
        </div>
        <table id="display" class="table">
            <tr>
                <th></th><th>name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Action</th>
            </tr>
            <tr v-for="emp in empData" :key="emp">
                <td><img src="`../assets/photos/emp.profile`"/></td>
                <td>{{emp.name}}</td>
                <td>{{emp.gender}}</td>
                <td><div class="dept-label" v-for="dept in emp.departments" :key="dept">{{dept}}</div></td>
                <td>{{emp.salary}}</td>
                <td>{{emp.startDate}}</td>
                <td>
                    <span>
                        <img src="../assets/photos/edit.png" height="15px" width="15px"/>
                    </span>
                    <span @click="deleteEmployee(emp.id)">
                        <img src="../assets/photos/delete.png" height="15px" width="15px"/>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import EmpPayrollService from '@/service/EmpPayrollService';
export default {
  name: 'EmpDetail',
  props: {},
  data(){
        return{
            empData : [],
            src:"",
            empPayrollService: new EmpPayrollService()
        }
    },
    methods:{
        getEmpPayrollList(){
            this.empPayrollService.getAll()
                .then(
                    res => {
                        this.empData = res.data;
                })
        },
        deleteEmployee(id){
            this.empPayrollService.delete(id)
            .then(
                (res)=>{
                    alert("Employee deleted successfully "+id+" "+res.status);
                }       
            )
            .catch(error => {
                alert('Error deleting Employee having id ' + id + ' ' + error.message )
                this.response = 'Error: ' + error.response.status
            });
        }
    },
    created(){
        this.getEmpPayrollList()
    }
}
</script>

<style scoped>

.main-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}
.header-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}
.emp-detail-text{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}
.emp-count{
    background-color: #82a70c;
    color: #ffffff;
    border-radius: 42%;
    font-size: 16px;
    width: 26px;
    text-align: center;
    display: inline-block;
}
.add-button{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    background: #82a70c 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
}
.table-main{
    width: 80%;
    margin: 0 auto;
    overflow: auto;
}
.table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;
}
td,th{
    text-align: left;
    padding: 5px 8px;
}
th{
    background: #42515f 0% 0% no-repeat padding-box;
    border-radius: 3px 3px 0px 0px;
    text-align: left;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    border: 0px solid #dddddd;
}
tr:not(:first-child){
    background: #ffffff 0px 0px no-repeat padding-box;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
}
td{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #3d3d3d;
    opacity: 1;
}
td:first-child{
    display: flex;
    align-items: center;
}
td img:first-child{
    margin-right: 10px;
}
td img{
    cursor: pointer;
}
.dept-label{
    background-color: #e9fea5;
    border-radius: 40%;
    width: fit-content;
    padding: 1px 7px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    font-weight: 300;
    margin-bottom: 8px;
}

.profile
{
    height: 50px;
    width: 50px;
}
</style>