import React from 'react'
import { router, useForm } from '@inertiajs/react'

export default function FormValidate( {eventId}) {

    const {data, setData, post, processing, errors} = useForm({
        firstName : '',
        lastName : '',
        email : '',
        adress : '',
        postalCode : '',
        city : '',
        eventId : eventId,
        holderName : '',
        cardNumber : '',
        validityDate : '',
        cryptogram : ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        post(route('event.store'))
    }


    // function handleSubmit(e) {
    //     e.preventDefault()
    //     // console.log(e.target);
    //     const formData = new FormData(e.target);
        
    //     const firstName = formData.get('firstName');
    //     const lastName = formData.get('lastName');
    //     const email = formData.get('email');
    //     const adress = formData.get('adress');
    //     const postalCode = formData.get('postalCode');
    //     const city = formData.get('city');
    //     const holderName = formData.get('holderName');
    //     const cardNumber = formData.get('cardNumber');
    //     const validityDate = formData.get('validityDate');
    //     const cryptogram = formData.get('cryptogram');
    //     // console.log(formData);

    //     const url = route('event.store');
    //     // console.log(url);
    
    
    //     router.post(url, formData);
    // }

  return (
    <form onSubmit={handleSubmit} className='mt-5' method='post'>
        <div className='flex justify-center gap-10 flex-wrap'>
            <div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" id='firstName' value={data.firstName} onChange={e => setData('firstName', e.target.value)} name="firstName" />
                    {errors.firstName && <div>{errors.firstName}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="lastName">Lastname</label>
                    <input type="text" id='lastName' value={data.lastName} onChange={e => setData('lastName', e.target.value)} name="lastName" />
                    {errors.lastName && <div>{errors.lastName}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="email">Mail</label>
                    <input type="text" id='email' value={data.email} onChange={e => setData('email', e.target.value)} name="email" />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="adress">Adresse</label>
                    <input type="text" id='adress' value={data.adress} onChange={e => setData('adress', e.target.value)} name="adress" />
                    {errors.adress && <div>{errors.adress}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="postalCode">Code Postal</label>
                    <input type="text" id='postalCode' value={data.postalCode} onChange={e => setData('postalCode', e.target.value)} name="postalCode" />
                    {errors.postalCode && <div>{errors.postalCode}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="city">Ville</label>
                    <input type="text" id='city' value={data.city} onChange={e => setData('city', e.target.value)} name="city" />
                    {errors.city && <div>{errors.city}</div>}
                </div>
                {/* <div>
                    <input hidden type="text" name="eventId" value={eventId}  />
                </div> */}
            </div>
            <div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="holderName">Nom du titulaire de la carte</label>
                    <input type="text" id='holderName' value={data.holderName} onChange={e => setData('holderName', e.target.value)} name="holderName" />
                    {errors.holderName && <div>{errors.holderName}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="cardNumber">Numéro de carte</label>
                    <input type="text" id='cardNumber' value={data.cardNumber} onChange={e => setData('cardNumber', e.target.value)} name="cardNumber" />
                    {errors.cardNumber && <div>{errors.cardNumber}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="validityDate">Date de validité</label>
                    <input type="text" id='validityDate' value={data.validityDate} onChange={e => setData('validityDate', e.target.value)} name="validityDate" />
                    {errors.validityDate && <div>{errors.validityDate}</div>}
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="cryptogram">Cryptogramme</label>
                    <input type="text" id='cryptogram' value={data.cryptogram} onChange={e => setData('cryptogram', e.target.value)} name="cryptogram" />
                    {errors.cryptogram && <div>{errors.cryptogram}</div>}
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-10'>
            <button 
            type="submit"
            disabled={processing}
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Payer et valider la réservation</button>
        </div>
    </form>
  )
}
