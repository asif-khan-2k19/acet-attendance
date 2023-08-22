import React from 'react'

function Attendance() {

    const scrollToName = () => {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        const nameList = document.getElementsByTagName('td');

        for (let i = 0; i < nameList.length; i++) {
            const name = nameList[i].innerText.toLowerCase();
            if (name.includes(searchInput)) {
                nameList[i].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    const printCheckedCheckboxes = async (e) => {
        e.preventDefault();
        var checkboxes = document.getElementsByTagName("input");

        var presentStudents = [];
        var absentStudents = [];

        for (var i = 0; i <= 73; i++) {
            if (checkboxes[i].checked) {
                presentStudents.push(checkboxes[i].value);
            }
        }

        for (var i = 1; i <= 72; i++) {
            if (!presentStudents.includes(String(i))) {
                absentStudents.push(i);
            }
        }
        var totalPresentStudents = presentStudents.length;
        var totalAbsentStudents = absentStudents.length;
        var now = new Date();
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        var date = day + "/" + month + "/" + year;

        var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.log(time); // prints the current time in "H:i:s" format
        const presentStudentsString = presentStudents + " ";
        const absentStudentsString = absentStudents + " ";
        console.log(presentStudentsString);
        console.log(absentStudentsString);
        var chat = "https://wa.me/+918956742601?text=Section%20A%0ADate:%20" + date + "%0A--------------------------------------------------------------------------" + "%0APresent:%20" + presentStudents + "%0A--------------------------------------------------------------------------" + "%0AAbsent:%20" + absentStudents + "%0A--------------------------------------------------------------------------" + "%0ATotal%20Present%20students:%20" + totalPresentStudents + "%0A%0ATotal%20Absent%20students:%20" + totalAbsentStudents;
        console.log(chat);
        const res = await fetch(
            "https://acet-attendance-default-rtdb.firebaseio.com/attendanceData.json",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date,
                    time,
                    presentStudentsString,
                    absentStudentsString,
                    totalPresentStudents,
                    totalAbsentStudents
                }),
            }
        );
        window.open(chat);

    }

    const call = () => {
        var pass = document.getElementById('password').value;
        var password = "acet";

        if (pass == password) {
            document.getElementById('login-page').style = "display:none";
            document.getElementById('main-page').style = "display:block";
        }
        else {
            alert("Incorrect Password");
        }
    }

    return (
        <>
            <div class="login-page" id="login-page">
                <div class="content">
                    <img src="./logo.jpg" alt="Acet Logo" id="logo" /><br />
                    <input type="password" placeholder="Password" name="text" id="password" class="input" /><br />
                    <button class="button" onClick={call}>Login</button>
                </div>
                <a href="https://www.linkedin.com/in/asif-khan-2k22/" id="copyright">&copy; Mohammad Asif Khan</a>
            </div>

            <div id="main-page">
                <nav class="navbar bg-body-tertiary py-3" id="navbar">
                    <div class="input-group">
                        <div class="container-fluid d-flex justify-content-evenly">
                            <input type="text" id="searchInput" class="form-control" placeholder="Enter student name"
                                aria-label="Enter student name" aria-describedby="button-addon2" />
                            &ensp;
                            <button class="btn btn-primary" type="button" id="button-addon2"
                                onClick={scrollToName}>Search</button>
                        </div>
                    </div>
                </nav>
                <div class="container text-center mt-2" id="table">
                    <table class="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th>R no.</th>
                                <th>Name</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider text-uppercase">
                            <tr>
                                <td class="py-3">1</td>
                                <td class="py-3">TAUSIF ALI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="1" id="checkbox_1" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">2</td>
                                <td class="py-3">ANUJ THAKUR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="2" id="checkbox_2" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">3</td>
                                <td class="py-3">ASHAR KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="3" id="checkbox_3" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">4</td>
                                <td class="py-3">TARIQUE ALI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="4" id="checkbox_4" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">5</td>
                                <td class="py-3">ABBAS BAHRAINWALA</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="5" id="checkbox_5" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">6</td>
                                <td class="py-3">AHMED ALI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="6" id="checkbox_6" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">7</td>
                                <td class="py-3">SAURABH KANOJIYA</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="7" id="checkbox_7" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">8</td>
                                <td class="py-3">ASHLESHA GAJBHIYE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="8" id="checkbox_8" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">9</td>
                                <td class="py-3">AFFANUDDIN KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="9" id="checkbox_9" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">10</td>
                                <td class="py-3">MOHAMMAD TAUSIF</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="10" id="checkbox_10" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">11</td>
                                <td class="py-3">MOHAMMAD YUNUS</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="11" id="checkbox_11" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">12</td>
                                <td class="py-3">SAHIL SHAKIL KHATIK</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="12" id="checkbox_12" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">13</td>
                                <td class="py-3">SHEIKH IMRAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="13" id="checkbox_13" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">14</td>
                                <td class="py-3">ZOHAIR AHMAD</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="14" id="checkbox_14" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">15</td>
                                <td class="py-3">Daniyal Farooqui</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="15" id="checkbox_15" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">16</td>
                                <td class="py-3">ZOAIB SHEIKH</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="16" id="checkbox_16" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">17</td>
                                <td class="py-3">JUNAID KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="17" id="checkbox_17" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">18</td>
                                <td class="py-3">VAIBHAVI TATIMETI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="18" id="checkbox_18" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">19</td>
                                <td class="py-3">SARAH KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="19" id="checkbox_19" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">20</td>
                                <td class="py-3">REEFAT ABDUL HAFEEZ</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="20" id="checkbox_20" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">21</td>
                                <td class="py-3">YUSRA MAHEEN SHEIKH</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="21" id="checkbox_21" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">22</td>
                                <td class="py-3">ASHIYA KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="22" id="checkbox_22" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">23</td>
                                <td class="py-3">FIZA KHAN </td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="23" id="checkbox_23" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">24</td>
                                <td class="py-3">SANIYA QAZI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="24" id="checkbox_24" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">25</td>
                                <td class="py-3">VAISHNAVI DANGORE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="25" id="checkbox_25" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">26</td>
                                <td class="py-3">ISHA ALI </td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="26" id="checkbox_26" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">27</td>
                                <td class="py-3">MANSI PAUNIKAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="27" id="checkbox_27" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">28</td>
                                <td class="py-3">DIVYANI NIKAM</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="28" id="checkbox_28" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">29</td>
                                <td class="py-3">RUNZZUN KAWADE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="29" id="checkbox_29" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">30</td>
                                <td class="py-3">TASMIYA SUHAIL</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="30" id="checkbox_30" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">31</td>
                                <td class="py-3">FALSHRUTI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="31" id="checkbox_31" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">32</td>
                                <td class="py-3">SHEIKH ZAINB TABASSUM</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="32" id="checkbox_32" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">33</td>
                                <td class="py-3">DANISHA NAAZ</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="33" id="checkbox_33" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">34</td>
                                <td class="py-3">ANUSHKA MOHADIKAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="34" id="checkbox_34" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">35</td>
                                <td class="py-3">REEBA DIWAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="35" id="checkbox_35" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">36</td>
                                <td class="py-3">NISHA LOHI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="36" id="checkbox_36" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">37</td>
                                <td class="py-3">BUSHRA ANSARI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="37" id="checkbox_37" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">38</td>
                                <td class="py-3">BUSHRA KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="38" id="checkbox_38" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">39</td>
                                <td class="py-3">BHARGAVI NARINGE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="39" id="checkbox_39" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">40</td>
                                <td class="py-3">PRANATI DAHIWALE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="40" id="checkbox_40" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">41</td>
                                <td class="py-3">NIDA KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="41" id="checkbox_41" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">42</td>
                                <td class="py-3">MOHAMMED TABISH ROMANI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="42" id="checkbox_42" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">43</td>
                                <td class="py-3">MOHAMMAD ZAFEER ANWAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="43" id="checkbox_43" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">44</td>
                                <td class="py-3">Sayed Nehal Ahmad</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="44" id="checkbox_44" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">45</td>
                                <td class="py-3">MOHAMMAD ASIF KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="45" id="checkbox_45" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">46</td>
                                <td class="py-3">VINEET NAIK</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="46" id="checkbox_46" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">47</td>
                                <td class="py-3">SOHAIL SHAIKH</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="47" id="checkbox_47" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">48</td>
                                <td class="py-3">MOHAMMAD SAAD</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="48" id="checkbox_48" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">49</td>
                                <td class="py-3">VIDHANT GAJBHIYE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="49" id="checkbox_49" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">50</td>
                                <td class="py-3">MUSAB AHMAD</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="50" id="checkbox_50" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">51</td>
                                <td class="py-3">FAIZAN QURESHI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="51" id="checkbox_51" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">52</td>
                                <td class="py-3">SAHIL BOTRE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="52" id="checkbox_52" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">53</td>
                                <td class="py-3">SYED SAIFUDDIN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="53" id="checkbox_53" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">54</td>
                                <td class="py-3">TANAY FAYE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="54" id="checkbox_54" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">55</td>
                                <td class="py-3">AKANKSHA JAMBHULKAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="55" id="checkbox_55" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">56</td>
                                <td class="py-3">HARSH DAFARE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="56" id="checkbox_56" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">57</td>
                                <td class="py-3">ADNAN HAQUE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="57" id="checkbox_57" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">58</td>
                                <td class="py-3">SAIF AKBANI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="58" id="checkbox_58" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">59</td>
                                <td class="py-3">SHAHAN KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="59" id="checkbox_59" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">60</td>
                                <td class="py-3">MOHD RAZIQUE</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="60" id="checkbox_60" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">61</td>
                                <td class="py-3">REHAN SHEIKH</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="61" id="checkbox_61" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">62</td>
                                <td class="py-3">KAMRAN QURESHI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="62" id="checkbox_62" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">63</td>
                                <td class="py-3">HIMANSHU GAUTAM</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="63" id="checkbox_63" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">64</td>
                                <td class="py-3">ANSHUL TIWARI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="64" id="checkbox_64" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">65</td>
                                <td class="py-3">ADIL SHEIKH</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="65" id="checkbox_65" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">66</td>
                                <td class="py-3">FAISAL AMIN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="66" id="checkbox_66" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">67</td>
                                <td class="py-3">KAIF ALI</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="67" id="checkbox_67" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">68</td>
                                <td class="py-3">ROHIT KINKAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="68" id="checkbox_68" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">69</td>
                                <td class="py-3">ANKIT DAHIKAR</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="69" id="checkbox_69" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">70</td>
                                <td class="py-3">AMMAR KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="70" id="checkbox_70" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">71</td>
                                <td class="py-3">HUMERA KHAN</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="71" id="checkbox_71" /></td>
                            </tr>
                            <tr>
                                <td class="py-3">72</td>
                                <td class="py-3">SAQUIB</td>
                                <td class="py-3"><input type="checkbox" class="checkbox" value="72" id="checkbox_72" /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button onClick={printCheckedCheckboxes} class="btn btn-primary">Share Attendence</button>
                    
                    <br /><br />
                    <a href="#navbar">
                        <button class="btn btn-primary" style={{ position: "fixed", left: "10px", bottom: "10px" }}>Top</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Attendance;