<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreeventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'firstname'=>'required|string|nullable',            
            // 'lastname'=>'required|string|nullable',            
            // 'email'=>'required|string|nullable',  
            // 'adress'=>'required|string|nullable',  
            // 'postalCode'=>'required|string|nullable',  
            // 'city'=>'required|string|nullable',  
            // 'holderName'=>'required|string|nullable',  
            // 'cardNumber'=>'required|string|nullable',  
            // 'validityDate'=>'required|string|nullable',  
            // 'cryptogram'=>'required|string|nullable'
        ];
    }
}
