import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewAddress } from '../../redux/slice';

export default function Address() {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [flatHouse, setFlatHouse] = useState('');
    const [area, setArea] = useState('');
    const [landmark, setLandmark] = useState('');
    const [townCity, setTownCity] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [pincodeError, setPincodeError] = useState('');
    const [flatHouseError, setFlatHouseError] = useState('');
    const [areaError, setAreaError] = useState('');
    const [landmarkError, setLandmarkError] = useState('');
    const [townCityError, setTownCityError] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (!fullName.trim()) {
            setFullNameError('Please enter full name');
        } else {
            setFullNameError('');
        }
        // Add validation for other fields
        // For simplicity, let's assume all other fields are required

        if (!mobileNumber.trim()) {
            setMobileNumberError('Please enter mobile number');
        } else {
            setMobileNumberError('');
        }

        if (!pincode.trim()) {
            setPincodeError('Please enter pincode');
        } else {
            setPincodeError('');
        }

        if (!flatHouse.trim()) {
            setFlatHouseError('Please enter flat/house/building');
        } else {
            setFlatHouseError('');
        }

        if (!area.trim()) {
            setAreaError('Please enter area');
        } else {
            setAreaError('');
        }

        if (!landmark.trim()) {
            setLandmarkError('Please enter landmark');
        } else {
            setLandmarkError('');
        }

        if (!townCity.trim()) {
            setTownCityError('Please enter town/city');
        } else {
            setTownCityError('');
        }

        if(fullName && mobileNumber && pincode && flatHouse && area && landmark && townCity){
            dispatch(addNewAddress({
                fullName:fullName,
                mobileNumber:mobileNumber,
                pincode:pincode,
                flatHouse:flatHouse,
                area:area,
                landmark:landmark,
                townCity:townCity
            }))
            navigate('/payment')
        }
    };
    

    return (
        <div className='w-50 m-auto d-block'>
            <h3 className='mt-5'>Add New Address</h3>
            <div className='mt-3'>
                <div className='mt-3'>
                    <label><b>Full name (First and Last name)</b></label><br />
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='form-control'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {fullNameError && <span className="text-danger">{fullNameError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Mobile number</b></label><br />
                    <input
                        type='number'
                        placeholder='Mobile Number'
                        className='form-control'
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    {mobileNumberError && <span className="text-danger">{mobileNumberError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Pincode</b></label><br />
                    <input
                        type='number'
                        placeholder='Pincode'
                        className='form-control'
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    {pincodeError && <span className="text-danger">{pincodeError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Flat, House no., Building, Company, Apartment</b></label><br />
                    <input
                        type='text'
                        placeholder='Flat/House/Building'
                        className='form-control'
                        value={flatHouse}
                        onChange={(e) => setFlatHouse(e.target.value)}
                    />
                    {flatHouseError && <span className="text-danger">{flatHouseError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Area, Street, Sector, Village</b></label><br />
                    <input
                        type='text'
                        placeholder='Area'
                        className='form-control'
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                    {areaError && <span className="text-danger">{areaError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Landmark</b></label><br />
                    <input
                        type='text'
                        placeholder='Landmark'
                        className='form-control'
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                    />
                    {landmarkError && <span className="text-danger">{landmarkError}</span>}
                </div>
                <div className='mt-3'>
                    <label><b>Town/City</b></label><br />
                    <input
                        type='text'
                        placeholder='Town/City'
                        className='form-control'
                        value={townCity}
                        onChange={(e) => setTownCity(e.target.value)}
                    />
                    {townCityError && <span className="text-danger">{townCityError}</span>}
                </div>
                <button onClick={() =>{handleSubmit()}} className='mt-5 address_btn'>Use this address</button>
            </div>
        </div>
    );
}