import React from 'react'

export default function FormValidate() {

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(e.target);
        const formData = new FormData(e.target);
        
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const mail = formData.get('mail');
        const adress = formData.get('adress');
        const postalCode = formData.get('postalCode');
        const city = formData.get('city');
        const holderName = formData.get('holderName');
        const cardNumber = formData.get('cardNumber');
        const validityDate = formData.get('validityDate');
        const cryptogram = formData.get('cryptogram');
        console.log(formData);


    }

  return (
    <form onSubmit={handleSubmit} className='mt-5' action='' method='GET'>
        <div className='flex justify-center gap-10 flex-wrap'>
            <div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" id='firstName' name="firstName" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="lastName">Lastname</label>
                    <input type="text" id='lastName' name="lastName" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="mail">Mail</label>
                    <input type="text" id='mail' name="mail" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="adress">Adresse</label>
                    <input type="text" id='adress' name="adress" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="postalCode">Code Postal</label>
                    <input type="text" id='postalCode' name="postalCode" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="city">Ville</label>
                    <input type="text" id='city' name="city" />
                </div>
            </div>
            <div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="holderName">Nom du titulaire de la carte</label>
                    <input type="text" id='holderName' name="holderName" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="cardNumber">Numéro de carte</label>
                    <input type="text" id='cardNumber' name="cardNumber" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="validityDate">Date de validité</label>
                    <input type="text" id='validityDate' name="validityDate" />
                </div>
                <div className='flex flex-col w-80'>
                    <label htmlFor="cryptogram">Cryptogramme</label>
                    <input type="text" id='cryptogram' name="cryptogram" />
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-10'>
            <button type="submit" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Payer et valider la réservation</button>
        </div>
    </form>
  )
}
