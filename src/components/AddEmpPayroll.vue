<template>
    <div class="body">
        <div class="form-content">
        <form class="form" @submit.prevent="AddEmployeePayrollData">
            <div class="form-head">Employee Payroll Form</div>
            <div class="row-content">
                <label class="label text label-fields">Name</label>
                <input v-model="name" class="input" type="text" id="name" name="name" placeholder="Your name..">
                <error-output class="text-error" for="text"></error-output>
            </div>
            <div class="row-content">
                <label class="label text label-fields">Email</label>
                <input v-model="email" class="input" type="text" id="email" name="email" placeholder="Your email..">
                <error-output class="text-error" for="text"></error-output>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="profile">Profile </label>
                <div class="profile-radio-content">
                    <label>
                        <input v-model="profile" type="radio" id="profile1" name="profile" value="../assets/photos/profile2.webp" required>
                        <img class="profile" id="image1" src="../assets/photos/profile2.webp">
                    </label>
                    <label>
                        <input v-model="profile" type="radio" id="profile2" name="profile" value="../assets/photos/profile4.png" required>
                        <img class="profile" id="image2" src="../assets/photos/profile4.png">
                    </label>
                    <label>
                        <input v-model="profile" type="radio" id="profile3" name="profile" value="../assets/photos/profile8.jpg" required>
                        <img class="profile" id="image3" src="../assets/photos/profile8.jpg">
                    </label>
                    <label>
                        <input v-model="profile" type="radio" id="profile4" name="profile" value="../assets/photos/profile7.jpg" required>
                        <img class="profile" id="image4" src="../assets/photos/profile7.jpg">
                    </label>
                </div>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="gender">Gender</label>
                <div>
                    <input v-model="gender" type="radio" id="male" name="gender" value="male">
                    <label class="text" for="male">Male</label>
                    <input v-model="gender" type="radio" id="female" name="gender" value="female">
                    <label class="text" for="female">Female</label>
                </div>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="department">Department</label>
                <div>
                    <input v-model="departments" class="checkbox" type="checkbox" id="Hr" name="department" value="Hr">
                    <label class="text" for="hr">HR</label>
                    <input v-model="departments" class="checkbox" type="checkbox" id="Sales" name="department" value="Sales">
                    <label class="text" for="sales">Sales</label>
                    <input  v-model="departments" class="checkbox" type="checkbox" id="Finance" name="department" value="Finance">
                    <label  class="text" for="finance">Finance</label>
                    <input v-model="departments" class="checkbox" type="checkbox" id="engineer" name="department" value="engineer">
                    <label class="text" for="engineer">Engineer</label>
                    <input v-model="departments" class="checkbox" type="checkbox" id="Others" name="department" value="Others">
                    <label class="text" for="others">Others</label>
                </div>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="salary">Choose salary: </label>
                <input v-model="salary" class="input" type="range" name="salary" id="salary" min="300000" max="500000" step="100"
                    value="400000">
                <output class="salary-output text" for="salary">400000</output>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="startDate">Start Date</label>
                <div>
                    <select id="day" name="Day" v-model="day">
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select id="month" name="month" v-model="month">
                        <option value="01">January</option>
                        <option value="02">Febuary</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select id="year" name="Year" v-model="year">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
            </div>
            <div class="row-content">
                <label class="label text  label-fields" for="notes">Notes</label>
                <textarea id="notes" class="input" name="Notes" placeholder="" style="height:100px;"></textarea>
            </div>
            <div class="buttonParent">
                <a href="#" class="resetButton button cancelButton">Cancel</a>
                <div>
                    <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                    <button type="reset" class="resetButton button">Reset</button>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddEmpPayroll',
  props: {
    msg: String
  },
  data(){
    return { 
        name:'',
        gender:'',
        departments:[],
        salary:0,
        day:1,
        month:1,
        year:2020,
        profile:'',
        email:'',
        response:''
    }
  },
  methods:{
    AddEmployeePayrollData(){
        axios.post('http://localhost:8080/emp/add',{
            name:this.name,
            gender:this.gender,
            departments:this.departments,
            salary:this.salary,
            startDate: this.year + "-" + this.month + "-" + this.day,
            profile:this.profile,
            email:this.email
        })
        .then(response => {this.response = JSON.stringify(response, null, 2)})
        .catch(error => this.response = 'Error: ' + error.response.status);
    }
  }
}
</script>

<style>

.emp-payroll {
    color: #42515f;
}

.form-content {
    display: flex;
    min-height: calc(100%-80px);
    background-color: #f7f7f7;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form-head {
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;

}

.form {
    padding: 50px;
    width: 65%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

.lable {
    min-width: 200px;
}

label {
    padding: 12px 12px 12px 0px;
}

.label-fields {
    min-width: 110px;
}

.text {
    font-size: 16px;
    color: #42515f;
    opacity: 1;
    font-family: system-ui;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}

select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    background-color: transparent;
}

.buttonParent {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}

.button {
    font-size: 20px;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}

.submitButton {
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
}

@media only screen and(max-width:960px) {
    .cancelButton {
        margin-left: 0px;
    }

    .form {
        width: 85%;
        padding: 44px 20px;
    }
}

@media only screen and(max-width:600px) {
    .form {
        margin-top: 10px;
    }

    .row {
        flex-direction: column;
    }

    .uploadButoon {
        justify-content: flex-start;
    }

    .profile-radio-button {
        flex-flow: wrap;
    }

    .submitButton {
        margin: 0px;
    }

    .buttonParent {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
    .error-output{
        margin-left: 10px;
        font-size: 12px;
        font-style: italic;
        color: red;
    }
}
</style>