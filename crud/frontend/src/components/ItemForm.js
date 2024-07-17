import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    // personal information
    const [surname, setSurname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [extension, setExtension] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [place_of_birth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [gsis, setGsis] = useState('');
    const [pagibig, setPagibig] = useState('');
    const [philhealth, setPhilhealth] = useState('');
    const [sss, setSss] = useState('');
    const [tin, setTin] = useState('');
    const [agency_employee, setAgencyEmployee] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_address, setResidentialAddress] = useState('');
    const [residential_zipcode, setResidentialZipcode] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [permanent_zipcode, setPermanentZipcode] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    // family background
    const [spouse_firstname, setSpouseFirstname] = useState('');
    const [spouse_middlename, setSpouseMiddlename] = useState('');
    const [spouse_surname, setSpouseSurname] = useState('');
    const [spouse_extension, setSpouseExtension] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employer_name, setEmployerName] = useState('');
    const [business_address, setBusinessAddress] = useState('');
    const [business_telephone, setBusinessTelephone] = useState('');
    const [father_firstname, setFatherFirstname] = useState('');
    const [father_middlename, setFatherMiddlename] = useState('');
    const [father_surname, setFatherSurname] = useState('');
    const [father_extension, setFatherExtension] = useState('');
    const [mother_firstname, setMotherFirstname] = useState('');
    const [mother_middlename, setMotherMiddlename] = useState('');
    const [mother_surname, setMotherSurname] = useState('');
    const [mother_extension, setMotherExtension] = useState('');

    const [children1, setChildren1] = useState('');
    const [children1dob, setChildren1dob] = useState('');
    const [children2, setChildren2] = useState('');
    const [children2dob, setChildren2dob] = useState('');
    const [children3, setChildren3] = useState('');
    const [children3dob, setChildren3dob] = useState('');
    const [children4, setChildren4] = useState('');
    const [children4dob, setChildren4dob] = useState('');

    //educational background
    const [elementary_school, setElementarySchool] = useState('');

    const [secondary_school, setSecondarySchool] = useState('');

    const [vocational_school, setVocationalSchool] = useState('');

    const [college_school, setCollegeSchool] = useState('');

    const [gs_school, setGsSchool] = useState('');

    useEffect(() => {
        if(item) {
            setSurname(item.surname);
            setFirstname(item.firstname);
            setMiddlename(item.middlename);
            setExtension(item.extension);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.blood_type);
            setGsis(item.gsis);
            setPagibig(item.pagibig);
            setPhilhealth(item.philhealth);
            setSss(item.sss);
            setTin(item.tin);
            setAgencyEmployee(item.agency_employee);
            setCitizenship(item.citizenship);
            setResidentialAddress(item.residential_address);
            setResidentialZipcode(item.residential_zipcode);
            setPermanentAddress(item.permanent_address);
            setPermanentZipcode(item.permanent_zipcode);
            setTelephone(item.telephone);
            setMobile(item.mobile);
            setEmail(item.email);

            //family background
            setSpouseFirstname(item.spouse_firstname);
            setSpouseMiddlename(item.spouse_middlename);
            setSpouseSurname(item.spouse_lastname);
            setSpouseExtension(item.spouse_extension);
            setOccupation(item.occupation);
            setEmployerName(item.employer_name);
            setBusinessAddress(item.business_address);
            setBusinessTelephone(item.business_telephone);
            setFatherFirstname(item.father_firstname);
            setFatherMiddlename(item.father_middlename);
            setFatherSurname(item.father_lastname);
            setFatherExtension(item.father_extension);
            setMotherFirstname(item.mother_firstname);
            setMotherMiddlename(item.mother_middlename);
            setMotherSurname(item.mother_lastname);
            setMotherExtension(item.mother_extension);

            setChildren1(item.children1);
            setChildren1dob(item.children1dob);
            setChildren2(item.children2);
            setChildren2dob(item.children2dob);
            setChildren3(item.children3);
            setChildren3dob(item.children3dob);
            setChildren4(item.children4);
            setChildren4dob(item.children4dob);

            //educational background
            setElementarySchool(item.elementary_school);

            setSecondarySchool(item.secondary_school);

            setVocationalSchool(item.vocational_school);

            setCollegeSchool(item.college_school);

            setGsSchool(item.gs_school);
        }
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {
            surname,
            firstname,
            middlename,
            extension,
            date_of_birth,
            place_of_birth,
            sex,
            civil_status,
            height,
            weight,
            blood_type,
            gsis,
            pagibig,
            philhealth,
            sss,
            tin,
            agency_employee,
            citizenship,
            residential_address,
            residential_zipcode,
            permanent_address,
            permanent_zipcode,
            telephone,
            mobile,
            email,

            //family background
            spouse_firstname,
            spouse_middlename,
            spouse_surname,
            spouse_extension,
            occupation,
            employer_name,
            business_address,
            business_telephone,
            father_firstname,
            father_middlename,
            father_surname,
            father_extension,
            mother_firstname,
            mother_middlename,
            mother_surname,
            mother_extension,

            children1, children1dob,
            children2, children2dob,
            children3, children3dob,
            children4, children4dob,

            //educational background
            elementary_school,
            secondary_school,
            vocational_school,
            college_school,
            gs_school
        };
        try {
            if(item) {
                await
                axios.put(`http://localhost:8000/items/${item.id}/`, data);
            }else {
                axios.post('http://localhost:8000/items/', data);
            }
            onSuccess();
        }catch(error) {
            console.error('Error submitting the form!', error);
        }
    };

    return(
            <div className='form-table'>
                <h1 id='header'>Create Data Sheet</h1>
                <div>
                    <form onSubmit={handleSubmit} >
                        <table>
                            <tr>
                                <td colSpan={'15'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'blue', color: 'white', border: '1px solid black'}}>
                                    <b><i>I. PERSONAL INFORMATION</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SURNAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FIRST NAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={extension} onChange={(e) => setExtension(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MIDDLENAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={middlename} onChange={(e) => setMiddlename(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    DATE OF BIRTH<br/>
                                    <p>(yyyy/mm/dd)</p>
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='date' value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    CITIZENSHIP
                                </td>
                                <td colSpan={'10'}style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PLACE OF BIRTH
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={place_of_birth} onChange={(e) => setPlaceOfBirth(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SEX
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    CIVIL STATUS
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                            <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    RESIDENTIAL ADDRESS
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ZIP CODE
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={residential_zipcode} onChange={(e) => setResidentialZipcode(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PERMANENT ADDRESS
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ZIP CODE
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={permanent_zipcode} onChange={(e) => setPermanentZipcode(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    HEIGHT
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    WEIGHT
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    BLOOD TYPE
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)} required/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    GSIS ID NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gsis} onChange={(e) => setGsis(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PAG-IBIG ID NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={pagibig} onChange={(e) => setPagibig(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PHILHEALTH NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={philhealth} onChange={(e) => setPhilhealth(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SSS NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={sss} onChange={(e) => setSss(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TIN NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={tin} onChange={(e) => setTin(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    AGENCY EMPLOYEE NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={agency_employee} onChange={(e) => setAgencyEmployee(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOBILE NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    EMAIL ADDRESS (if any)
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TELEPHONE NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                                </td>
                            </tr>

                            {/* family background */}

                            <tr>
                                <td colSpan={'15'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'green', color: 'white', border: '1px solid black'}}>
                                    <b><i>II. FAMILY BACKGROUND</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S SURNAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_surname} onChange={(e) => setSpouseSurname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S FIRST NAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_firstname} onChange={(e) => setSpouseFirstname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S MIDDLENAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_middlename} onChange={(e) => setSpouseMiddlename(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_extension} onChange={(e) => setSpouseExtension(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    OCCUPATION
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    EMPLOYER/BUSINESS NAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={employer_name} onChange={(e) => setEmployerName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    BUSINESS ADDRESS
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={business_address} onChange={(e) => setBusinessAddress(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TELEPHONE NO.
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={business_telephone} onChange={(e) => setBusinessTelephone(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S SURNAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_surname} onChange={(e) => setFatherSurname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S FIRST NAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_firstname} onChange={(e) => setFatherFirstname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S MIDDLENAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_middlename} onChange={(e) => setFatherMiddlename(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_extension} onChange={(e) => setFatherExtension(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S SURNAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S FIRST NAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_firstname} onChange={(e) => setMotherFirstname(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S MIDDLENAME
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_middlename} onChange={(e) => setMotherMiddlename(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_extension} onChange={(e) => setMotherExtension(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'10'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME OF CHILDREN(write full name and list and all)
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    DATE OF BIRTH<br/>
                                    (yyyy/mm/dd)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children1} onChange={(e) => setChildren1(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children1dob} onChange={(e) => setChildren1dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children2} onChange={(e) => setChildren2(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children2dob} onChange={(e) => setChildren2dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children3} onChange={(e) => setChildren3(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children3dob} onChange={(e) => setChildren3dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children4} onChange={(e) => setChildren4(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children4dob} onChange={(e) => setChildren4dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'15'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <center><i style={{color: 'white'}}>(Continue on seperate sheet if necessary)</i></center>
                                </td>
                            </tr>

                            {/* educational background */}

                            <tr>
                                <td colSpan={'15'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'violet', color: 'white', border: '1px solid black'}}>
                                    <b><i>III. EDUCATIONAL BACKGROUND</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    LEVEL
                                </td>
                                <td colSpan={'10'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME OF SCHOOL<br/>
                                    (write in full)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ELEMENTARY
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_school} onChange={(e) => setElementarySchool(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SECONDARY
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_school} onChange={(e) => setSecondarySchool(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    VOCATIONAL
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_school} onChange={(e) => setVocationalSchool(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    COLLEGE
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_school} onChange={(e) => setCollegeSchool(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    GRADUATE STUDIES
                                </td>
                                <td colSpan={'10'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_school} onChange={(e) => setGsSchool(e.target.value)}/>
                                </td>
                            </tr>
                            
                        </table>
                        <button type='submit' id='submit-button' className='submit-button'>Add Item</button>
                    </form>
                </div>
            </div>
    );

}

export default ItemForm;