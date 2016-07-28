@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                    {{Auth::user()->type}}
                    @if(UserLib::isAdmin(Auth::user()->id))
                      You are admin!
                    @endif
                    <br>
                    {{$user->username}} <br>
                    {{$user->posts}}
                    {{$user->id}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
