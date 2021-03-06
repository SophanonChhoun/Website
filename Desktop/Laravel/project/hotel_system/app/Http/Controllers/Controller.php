<?php

namespace App\Http\Controllers;

use App\Core\DateLib;
use App\Models\customer\CustomerLoginAccess;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Controller constructor.
     */
    public function __construct()
    {
        if(request()->header('Auth'))
        {
            $token = request()->header('Auth');
            $now = DateLib::getNow();
            CustomerLoginAccess::where("access_token",$token)->update([
               "expired_at" => $now->addDay()
            ]);
        }
    }

    protected function formatValidationErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }
    public function success ($data)
    {
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function fail($message,$code = 403)
    {
        if($code == 500)
        {
            return response()->json(['success' => false, 'data' => "There is something wrong"]);
        }
        return response()->json(['success' => false, 'data' => $message]);
    }

}
