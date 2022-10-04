@extends("la.layouts.app")

@section("contentheader_title")
	<a href="{{ url(config('laraadmin.adminRoute') . '/project_trackers') }}">Project Tracker</a> :
@endsection
@section("contentheader_description", $project_tracker->$view_col)
@section("section", "Project Trackers")
@section("section_url", url(config('laraadmin.adminRoute') . '/project_trackers'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Project Trackers Edit : ".$project_tracker->$view_col)

@section("main-content")

@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<div class="box">
	<div class="box-header">
		
	</div>
	<div class="box-body">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				{!! Form::model($project_tracker, ['route' => [config('laraadmin.adminRoute') . '.project_trackers.update', $project_tracker->id ], 'method'=>'PUT', 'id' => 'project_tracker-edit-form']) !!}
					@la_form($module)
					
					{{--
					@la_input($module, 'permission')
					--}}
                    <br>
					<div class="form-group">
						{!! Form::submit( 'Update', ['class'=>'btn btn-success']) !!} <button class="btn btn-default pull-right"><a href="{{ url(config('laraadmin.adminRoute') . '/project_trackers') }}">Cancel</a></button>
					</div>
				{!! Form::close() !!}
			</div>
		</div>
	</div>
</div>

@endsection

@push('scripts')
<script>
$(function () {
	$("#project_tracker-edit-form").validate({
		
	});
});
</script>
@endpush
