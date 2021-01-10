@extends('BackEnd.layout.layoutsite')
@section('title', $controllerName)
@section('head')
    @include('BackEnd.scripts.css')
    <style>
        img{
            max-height: 100px;
            max-width: 100px;
        }
    </style>
    <script>
        $(document).ready(function(){
          function showNotification(message,from, align){
              $.notify({
                  icon: "add_alert",
                  message: message,
              },{
                  type: 'danger',
                  timer: 2000,
                  placement: {
                      from: from,
                      align: align
                  }
              });
           };
        });
  </script>
@endsection
@section('content')
    <div class="container-fluid my-5">
        <div class="row">
            <div class="col-md-12">
              @if (session('message'))
                  @php
                      $type=session('message');
                  @endphp
                  <div class="alert alert-{{ $type['type'] }} alert-dismissible fade show" role="alert">
                      <strong>{{ $type['msg'] }}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
              @endif
              @if ($errors->any())
              @foreach ($errors->all() as $item)
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>{{ $item }}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              @endforeach
           @endif
           </div>
   </div>
        <div class="row">
            <div class="col-md-8">
                <form action="{{Route('admin.newsdetailsUpdate',$newsdetails->id)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="title">Chủ đề</label>
                        <input type="text" class="form-control" value="{{ $newsdetails->title }}" name="title" minlength="5" maxlength="20">
                    </div>
                    <div class="form-group">
                        <label  class="size">Nội dung</label><br>
                        <textarea class="form-control" name="detail" id="exampleFormControlTextarea1" rows="4">{{ $newsdetails->detail }}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="title">Mô tả SEO</label>
                        <input type="text" class="form-control" value="{{ $newsdetails->meta_desc }}" name="meta_desc" minlength="5">
                    </div>

                    <div class="form-group">
                        <label for="title">Từ khoá SEO</label>
                        <input type="text" class="form-control" value="{{ $newsdetails->meta_key }}" name="meta_key" minlength="5">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Trạng thái</label>
                            <div class="radio-list">
                                <label>
                                <input type="radio" name="status" value="0" {{ $newsdetails->status ==0 ?"checked":"" }} />Không hoạt động</label>
                                <br>
                                <label>
                                <input type="radio" name="status" value="1" {{ $newsdetails->status ==1 ?"checked":"" }}  />Hoạt động</label>
                            </div>
                    </div>
                    <div class="col-md-4">
                        <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                            <div class="fileinput-preview fileinput-exists thumbnail img-raised" style="display: flex;justify-content: center; ">
                                <img src="{{ $newsdetails->image }}" style="display: block">
                            </div>
                            <div>
                            <span class="btn btn-raised btn-round btn-default btn-file">
                                <span class="fileinput-new">Chọn Hình</span>
                                <span class="fileinput-exists">Thể Loại</span>
                                <input type="file"  name="image" />
                            </span>
                                <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <button class="btn btn-primary btn-round" type="submit">
                    <i class="material-icons">add_box</i> Sửa Chi Tiết Tin Tức
                </button>
                </form>
            </div>
        </div>
    </div>
                    {{-- /**include modal confirm **/--}}
@endsection
@section('script')
    @include('BackEnd.scripts.js')
    <script src="http://cdn.ckeditor.com/4.15.0/full/ckeditor.js"></script>
    <script src="/vendor/unisharp/laravel-ckeditor/adapters/jquery.js"></script>

    <script>
        var options = {
            filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
            filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
            filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
            filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
          };
        CKEDITOR.replace( 'detail',options);

    </script>
@endsection
