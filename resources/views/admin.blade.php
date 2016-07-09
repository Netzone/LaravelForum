@extends('layouts.app')

@section('content')

<div class="col-sm-6">
<h2>Add new Category</h2>
  {!! Form::open(array('url' => 'forum/addcat')) !!}
  {{ Form::label('name', 'Name') }}
  {{ Form::text('name', null, ['class' => 'form-control']) }}
  {{ Form::label('desc', 'Description') }}
  {{ Form::text('desc', null, ['class' => 'form-control']) }}
  {{ Form::hidden('type', 1) }}
  {{ Form::submit('Add Category') }}
  {!! Form::close() !!}
  <h2>Categories</h2>
  @foreach($categories as $category)
    {{$category->name}} <br>
  @endforeach
  <h2>Add new Forum</h2>
  @if($catNames)
    {!! Form::open(array('url' => 'forum/addforum')) !!}
    {{ Form::label('name', 'Name') }}
    {{ Form::text('name', null, ['class' => 'form-control']) }}
    {{ Form::label('desc', 'Description') }}
    {{ Form::text('desc', null, ['class' => 'form-control']) }}
    {{ Form::label('category', 'Category') }}
    {{ Form::select('category', $catNames,null, ['class' => 'form-control']) }}
    {{ Form::hidden('type', 0) }}
    {{ Form::submit('Add Forum') }}
    {!! Form::close() !!}
  @endif
  <h2>Forums</h2>
  @foreach($forums as $forum)
    {{$category->name}} <br>
  @endforeach

  <h2>Users</h2>

  <h2>Add new Category</h2>

</div>
@endsection