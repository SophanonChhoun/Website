<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;
    protected $fillable = [
      "title",
      "address",
      "phone_number",
      "fax",
      "email",
      "is_enable"
    ];
}
