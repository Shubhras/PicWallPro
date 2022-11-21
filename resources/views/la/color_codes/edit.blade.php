@extends("la.layouts.app")

@section("contentheader_title")
	<a href="{{ url(config('laraadmin.adminRoute') . '/color_codes') }}">Color code</a> :
@endsection
@section("contentheader_description", $color_code->$view_col)
@section("section", "Color codes")
@section("section_url", url(config('laraadmin.adminRoute') . '/color_codes'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Color codes Edit : ".$color_code->$view_col)

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
				{!! Form::model($color_code, ['route' => [config('laraadmin.adminRoute') . '.color_codes.update', $color_code->id ], 'method'=>'PUT', 'id' => 'color_code-edit-form']) !!}
					@la_form($module)
					
					{{--
					@la_input($module, 'code')
					@la_input($module, 'company_id')
					--}}
                    <br>
					<div class="form-group">
						{!! Form::submit( 'Update', ['class'=>'btn btn-success']) !!} <button class="btn btn-default pull-right"><a href="{{ url(config('laraadmin.adminRoute') . '/color_codes') }}">Cancel</a></button>
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
	$("#color_code-edit-form").validate({
		
	});
});
</script>
@endpush
