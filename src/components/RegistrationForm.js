import React, { useState } from 'react'
import emailjs from 'emailjs-com';
function DirectorInfo(props) {
    var director = props.dire;
    var directorInfo = props.direInfo;
    var setdirectorInfo = props.setdireInfo;
    const updateDireName = i => e => {
        let newArr = [...directorInfo];
        newArr[i].name = e.target.value;
        setdirectorInfo(newArr);
    }
    const updateDireShare = i => e => {
        let newArr = [...directorInfo];
        newArr[i].share = e.target.value;
        setdirectorInfo(newArr);
    }
    const row = [];
    for (var i = 0; i < director; i++) {
        row.push(<div class="row g-3 mb-3">
            <div class="form-floating col-sm">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name"
                    value={directorInfo[i].name}
                    onChange={updateDireName(i)}
                />
                <label for="floatingInput">Director Name</label>
            </div>
            <div class="form-floating col-sm">
                <input
                    type="number"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name"
                    value={directorInfo[i].share}
                    onChange={updateDireShare(i)}
                    min={0}
                    max={100}
                />
                <label for="floatingInput">Share %</label>
            </div>
        </div>
        );
    }
    return row;
}
export default function RegistrationForm() {
    const [companyName, setcompanyName] = useState("");
    const [TOC, setTOC] = useState("Sole Proprietor");
    const [about, setabout] = useState("");
    const [address, setaddress] = useState("");
    const [sta, setsta] = useState("");
    const [share, setshare] = useState("");
    const [director, setdirector] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [directorInfoArray, setdirectorInfoArray] = useState([
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        },
        {
            "name": "",
            "share": ""
        }
    ]);
    const [showSuccess, setshowSuccess] = useState(false);
    const [alerttext, setalerttext] = useState("");
    const [alertclass, setalertclass] = useState("alert alert-success");

    const sentEmail = () => {
        let test = `
        <table style="font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;">
  <thead>
    <tr>
      <th style="  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;border: 1px solid #ddd;padding: 8px;">id</th>
      <th style="  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;border: 1px solid #ddd;padding: 8px;">Director Name</th>
      <th style="  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;border: 1px solid #ddd;padding: 8px;">Percentage Share</th>
    </tr>
  </thead>
  <tbody>
        `;
        let i = 0;
        for (i; i < director; i++) {
            test += `<tr>
                    <td style="border: 1px solid #ddd;padding: 8px;">${i + 1}</td>
                    <td style="border: 1px solid #ddd;padding: 8px;">${directorInfoArray[i].name}</td>
                    <td style="border: 1px solid #ddd;padding: 8px;">${directorInfoArray[i].share}</td>
                    </tr>`
        }
        test += `</tbody>
                </table>`;
        var templateParams = {
            companyName: companyName,
            TOC: TOC,
            about: about,
            address: address,
            sta: sta,
            share: share,
            director: director,
            phone: phone,
            email: email,
            directorInfoArray: test
        };
        emailjs.send('service_wlob22s', 'template_xnu556u', templateParams, 'user_3Inqs4p5IdEdM4Uzjrhkm')
            .then((result) => {
                setalerttext("Thank you for connecting with us. One of our business advisor will get back to you shortly.");
                setalertclass("alert alert-success")
                setshowSuccess(true);
                setcompanyName("");
                setTOC("Sole Proprietor");
                setabout("");
                setaddress("");
                setsta("");
                setshare("");
                setdirector("");
                setphone("");
                setemail("");
                setdirectorInfoArray([
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    },
                    {
                        "name": "",
                        "share": ""
                    }
                ]);
                setTimeout(() => {
                    setshowSuccess(false);
                }, 6000);

            }, (error) => {
                console.log(error.text);
            });
    };

    const SumbitClick = () => {
        let flag = checkState();
        if (flag) {
            sentEmail();
            document.getElementById('RegistrationForm').scrollIntoView();
        }
        else {
            setalerttext("Please Fill all the input fields");
            setalertclass("alert alert-danger")
            setshowSuccess(true);
            document.getElementById('RegistrationForm').scrollIntoView();
            setTimeout(() => {
                setshowSuccess(false);
            }, 6000);
        }
    }
    const checkState = () => {
        if (TOC === "" || companyName === "" || about === "" || address === "" || sta === "" || share === ""
            || director === "" || phone === "" || email === "") {
            return false;
        }
        if (director !== "") {
            let i = 0;
            for (i = 0; i < director; i++) {
                if (directorInfoArray[i].name === "" || directorInfoArray[i].share === "")
                    return false;
            }
        }
        return true;
    }

    return (
        <>

            <section class="container py-5 my-5" id="RegistrationForm">
                <h1 class="text-center my-5">Company Registration Form</h1>
                {showSuccess ? <div class={alertclass} role="alert">
                    {alerttext}
                </div>
                    : null}
                {/* company name and type */}
                <div class="row g-3 mb-3">
                    {/* Name of the company */}
                    <div class="form-floating col-sm">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            value={companyName}
                            onChange={(e) => setcompanyName(e.target.value)}
                            placeholder="name" />
                        <label for="floatingInput">Company Name</label>
                    </div>
                    {/* type of the company */}
                    <div class="form-floating col-sm">
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            value={TOC}
                            onChange={(e) => setTOC(e.target.value)}>
                            {/* <option selected>Type of Company</option> */}
                            <option value="Sole Proprietor">Sole Proprietor</option>
                            <option value="Partnership Firm">Partnership Firm</option>
                            <option value="LLP">LLP</option>
                            <option value="OPC">OPC</option>
                            <option value="Private Limited Company">Private Limited Company</option>
                            <option value="Public Limited Company">Public Limited Company</option>
                        </select>
                        <label for="floatingInput">Type of Company</label>

                    </div>
                </div>

                {/* About the company */}
                <div class="form-floating mb-3">
                    <textarea
                        class="form-control"
                        placeholder=" "
                        id="floatingTextarea2"
                        style={{ height: 65 }}
                        value={about}
                        onChange={(e) => setabout(e.target.value)}></textarea>
                    <label for="floatingTextarea2">About the Company</label>
                </div>

                {/* company location */}
                <div class="row g-3 mb-3">
                    {/* address*/}
                    <div class="form-floating col-sm">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                            id="floatingInput"
                            value={address}
                            onChange={(e) => setaddress(e.target.value)} />
                        <label for="floatingInput">Company Address</label>
                    </div>
                    {/* state */}
                    <div class="form-floating col-sm">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="State"
                            id="floatingInput"
                            value={sta}
                            onChange={(e) => setsta(e.target.value)} />
                        <label for="floatingInput">State</label>
                    </div>
                </div>

                {/* share and no. of director */}
                <div class="row g-3 mb-3">
                    {/* company share capital */}
                    <div class="form-floating col-sm">
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name"
                            value={share}
                            onChange={(e) => setshare(e.target.value)} />
                        <label for="floatingInput">Share Capital (INR)</label>
                    </div>
                    {/* number of director */}
                    <div class="form-floating col-sm">
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name"
                            value={director}
                            onChange={(e) => e.target.value > 10 ? null : setdirector(e.target.value)}
                            max={10}
                            min={1} />
                        <label for="floatingInput">Number of Director </label>
                    </div>
                </div>

                {/* director info */}
                <DirectorInfo dire={director} direInfo={directorInfoArray} setdireInfo={setdirectorInfoArray} />

                {/* contact detail */}
                <div class="row g-3 mb-3">
                    {/*phone number*/}
                    <div class="form-floating col-sm">
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)} />
                        <label for="floatingInput">Phone Number</label>
                    </div>
                    {/* email address */}
                    <div class="form-floating col-sm">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div>
                    <p>I hereby declare that information provided in the online registration form is true to the best of my knowledge and I accept notes, terms, disclaimer, and policies by clicking "Register" button.</p>
                </div>
                {/* sumbit */}
                <div class="text-center">
                    <button class="btn btn-primary btn-lg" onClick={SumbitClick}>Register</button>
                </div>
            </section>

        </>
    )
}
