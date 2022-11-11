<?php

namespace App\Http\Controllers;

use App\Http\Traits\ApiKpiTraits;
use DB;
use Dwij\Laraadmin\Models\Module;
use Illuminate\Http\Request;

class ApiStudentsController extends ResponseApiController
{
    use ApiKpiTraits;
    /**
     * Get action plan acording to iniative id in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_get_student(Request $request)
    {
        $students = DB::table('students')->select('id', 'photo', 'hash', 'name', 'grade_year', 'activities', 'qoute', 'unit_id', 'company_id')
            ->where('company_id', $request->company_id)
            ->where('unit_id', $request->unit_id)
            ->where('deleted_at', null)
            ->get();

        foreach ($students as $key => $value) {
            $multi_activities = explode(', ', $value->activities);
            $students[$key]->activities = $multi_activities;
            // echo "<pre>";
            // dump($multi_activities);
            // $string = "123456stringsawexs";
            // $hash = str_shuffle($string);
            $temp = url('/') . '/files/' . $value->hash .'/'. $value->photo;
            $students[$key]->profile = $temp;
            // value  url('/') . '/files/' . $file_name->hash . '/' . $file_name->file_name;
        }
        // dump($students);die;

        $this->apiResponse['status'] = "success";
        $this->apiResponse['message'] = "students list";
        $this->apiResponse['data'] = $students;
        return $this->sendResponse();
    }
    /**
     * Store action_plans in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_add_students(Request $request)
    {
        // /var/www/html/PicWallPro/osteen/src/assets/images/avatars/Abbott.jpg
        $request['activities'] = implode(", ", $request->activities);
        $photo = "profile.jpg";
        // $destination = $_SERVER["DOCUMENT_ROOT"]."/storage/profile_picture";
        $destination = $_SERVER["DOCUMENT_ROOT"] . "/storage/profile_picture";
        $extension = pathinfo($photo, PATHINFO_EXTENSION);
        $string = "123456stringsawexs";
        $hash = str_shuffle($string);
        $path = $destination . '/' . $photo;
        $request['photo'] = $photo;
        $request['extension'] = $extension;
        $request['path'] = $path;
        $request['hash'] = $hash;

        //add students
        try {
            Module::insert("students", $request);
            $this->apiResponse['status'] = "success";
            $this->apiResponse['message'] = 'Successfully save student!';
            return $this->sendResponse();
        } catch (\Exception $e) {
            $this->apiResponse['status'] = "False";
            $this->apiResponse['message'] = $e->getMessage();
            return $this->sendResponse();
        }
    }

    /**
     * Store profile pic in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_update_student_profile(Request $request)
    {
        // echo "<pre>";
        // dump($request->all());die;
        try {
            if ($request->File('photo')->isValid()) {
                $name = uniqid() . '.' . $request->photo->getClientOriginalName();
                $destination = $_SERVER["DOCUMENT_ROOT"] . '/storage/profile_picture';
                $request->photo->move($destination, $name);

                $string = "123456stringsawexs";
                $extension = pathinfo($name, PATHINFO_EXTENSION);
                $path = $destination . '/' . $name;
                $public = 1;
                $hash = str_shuffle($string);

                $request->photo = $name;
                $request->extension = $extension;
                $request->path = $path;
                $request->public = $public;
                $request->hash = $hash;
                $date = date('Y-m-d h:i:s');
                // $image_id = Module::insert("student_profiles", $request);
                // if (!empty($image_id)) {
                DB::table('students')->where('id', $request->id)->update(['updated_at' => $date, 'photo' => $request->photo, 'extension' => $request->extension, 'path' => $request->path, 'hash' => $request->hash, 'public' => $request->public]);
                // }
                // $insert_id = Module::updateRow("students", $request, $request->id);
                // DB::table('employers')->where('user_id', $request->user_id)->update(['photo_id' => $image_id]);
            } else {
                $this->apiResponse['message'] = "Invalid Image Uploaded";
                return $this->sendResponse();
            }
        } catch (Exception $e) {
            $this->apiResponse['message'] = $e->getMessage();
            return $this->sendResponse();
        }
        $this->apiResponse['status'] = "success";
        $this->apiResponse['message'] = "successfully update your profile";
        return $this->sendResponse();
    }
    /**
     * Store edit task in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_update_student(Request $request)
    {
        // echo "<pre>"; dump($request); die;
        // try {
        //     if ($request()->File('photo')->isValid()) {

        //         $name = uniqid() . '.' . $request->photo->getClientOriginalName();
        //         $destination = $_SERVER["DOCUMENT_ROOT"] . '/storage/profile_picture';
        //         $request->photo->move($destination, $name);

        //         $string = "123456stringsawexs";
        //         $extension = pathinfo($name, PATHINFO_EXTENSION);
        //         $path = $destination . '/' . $name;
        //         $public = 1;
        //         $hash = str_shuffle($string);

        //         $request->name = $name;
        //         $request->extension = $extension;
        //         $request->path = $path;
        //         $request->public = $public;
        //         $request->hash = $hash;
        //         $image_id = Module::insert("student_profiles", $request);

        //         // DB::table('employers')->where('user_id', $request->user_id)->update(['photo_id' => $image_id]);
        //     } else {
        //         $this->apiResponse['message'] = "Invalid Image Uploaded";
        //         return $this->sendResponse();
        //     }
        // } catch (Exception $e) {
        //     $this->apiResponse['message'] = $e->getMessage();
        //     return $this->sendResponse();
        // }
        $request['activities'] = implode(", ", $request->activities);
        DB::table('students')->where('id', $request->id)->update(['updated_at' => $date, 'name' => $request->name, 'grade_year' => $request->grade_year, 'activities' => $request->activities, 'qoute' => $request->qoute, 'unit_id' => $request->unit_id, 'company_id' => $request->company_id]);
        // $insert_id = Module::updateRow("students", $request, $request->id);
        $this->apiResponse['status'] = "success";
        $this->apiResponse['message'] = 'Successfully updated record!';
        return $this->sendResponse();
    }
    /**
     * delete and task remark data in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function api_delete_student(Request $request)
    {
        $date = date('Y-m-d h:i:s');
        DB::table('students')->where('id', $request->id)->update(['deleted_at' => $date]);
        DB::commit();
        $this->apiResponse['status'] = "success";
        $this->apiResponse['message'] = 'Successfully deleted student!';
        return $this->sendResponse();
    }
}
