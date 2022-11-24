import axios from "axios";
export default class EmpPayrollService
{
   add(data) {
      return axios.post('http://localhost:8080/emp/add',data);
   }

   getAll(){
      return axios.get('http://localhost:8080/emp/all');
   }

   delete(id){
      return axios.delete('http://localhost:8080/emp/remove/'+id);
   }

   getEmployeeById(id){
      return axios.get('http://localhost:8080/emp/get/'+id);
   }

   updateEmp(data,id){
      return axios.put('http://localhost:8080/emp/edit/'+id, data);
   }
}