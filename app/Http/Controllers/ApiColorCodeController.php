<?php

namespace App\Http\Controllers;

use DB;
use Dwij\Laraadmin\Models\Module;
use Illuminate\Http\Request;

class ApiColorCodeController extends ResponseApiController
{
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_get_ColoCode(Request $request)
    {
        $ColoCode = DB::table('color_codes')
            ->where('company_id', $request->company_id)
            ->where('deleted_at', null)
            ->first();

        // echo "<pre>";
        // dump($ColoCode);die;

        $this->apiResponse['status'] = "success";
        $this->apiResponse['message'] = "ColoCode data";
        $this->apiResponse['data'] = $ColoCode;
        return $this->sendResponse();
    }
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_add_ColoCode(Request $request)
    {
        try {
            
            $ColoCode = DB::table('color_codes')
            ->where('company_id', $request->company_id)
            ->where('deleted_at', null)
            ->first();
            
            if (!empty($ColoCode)) {
                // echo "if: <pre>";
                // dump($request->all());die;
                DB::table('color_codes')
                    ->where('id', $ColoCode->id)
                    ->update(['updated_at' => $date, 'code' => $request->code, 'company_id' => $request->company_id]);

                    $this->apiResponse['status'] = "success";
                    $this->apiResponse['message'] = 'Successfully updated ColoCode!';
                    return $this->sendResponse();
            } else {
                // echo "else: <pre>";
                // dump($request->all());die;
                Module::insert("color_codes", $request);
                $this->apiResponse['status'] = "success";
                $this->apiResponse['message'] = 'Successfully save ColoCode!';
                return $this->sendResponse();
            }
        } catch (\Exception $e) {
            $this->apiResponse['status'] = "False";
            $this->apiResponse['message'] = $e->getMessage();
            return $this->sendResponse();
        }
    }
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function api_update_ColoCode(Request $request)
    // {
    //     // echo "<pre>";
    //     // dump($request->all());die;
    //     try {
    //         $date = date('Y-m-d h:i:s');

    //         DB::table('students')->where('id', $request->id)->update(['updated_at' => $date, 'photo' => $request->photo, 'extension' => $request->extension, 'path' => $request->path, 'hash' => $request->hash, 'public' => $request->public]);

    //         $this->apiResponse['status'] = "success";
    //         $this->apiResponse['message'] = "successfully update your profile";
    //         return $this->sendResponse();

    //     } catch (Exception $e) {
    //         $this->apiResponse['message'] = $e->getMessage();
    //         return $this->sendResponse();
    //     }
    // }
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function api_update_ColoCode(Request $request)
    // {

    //     $request['activities'] = implode(", ", $request->activities);
    //     DB::table('students')->where('id', $request->id)->update(['updated_at' => $date, 'name' => $request->name, 'grade_year' => $request->grade_year, 'activities' => $request->activities, 'qoute' => $request->qoute, 'unit_id' => $request->unit_id, 'company_id' => $request->company_id]);
    //     // $insert_id = Module::updateRow("students", $request, $request->id);
    //     $this->apiResponse['status'] = "success";
    //     $this->apiResponse['message'] = 'Successfully updated record!';
    //     return $this->sendResponse();
    // }
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function api_delete_student(Request $request)
    // {
    //     $date = date('Y-m-d h:i:s');
    //     DB::table('students')->where('id', $request->id)->update(['deleted_at' => $date]);
    //     DB::commit();
    //     $this->apiResponse['status'] = "success";
    //     $this->apiResponse['message'] = 'Successfully deleted student!';
    //     return $this->sendResponse();
    // }
}
