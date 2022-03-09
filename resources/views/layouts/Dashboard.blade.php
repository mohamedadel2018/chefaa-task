<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

<style>
  @media print {
        .not-print  {
            display: none !important;
        }
        .content-wrapper{
            margin-right: 0px !important;
        };
        }

</style>
    <meta charset="utf-8">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- title --}}
    {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}

  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{asset('plugins/fontawesome-free/css/all.min.css')}}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="{{asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{asset('plugins/jqvmap/jqvmap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('dist/css/adminlte.min.css')}}">
  {{-- my css style --}}
  <link rel="stylesheet" href="{{asset('dist/css/style.css')}}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{asset('plugins/daterangepicker/daterangepicker.css')}}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{asset('plugins/summernote/summernote-bs4.css')}}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

  <link rel="shortcut icon" href="{{asset('/images/chefaa-logo-new-green.png')}}"/>

{{-- <script src="//cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script> --}}


  {{-- for arabic direct --}}
 
  {{-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css"> --}}

    @yield('title')
</head>

<body class="hold-transition sidebar-mini layout-fixed " >
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light ">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      {{-- <li class="nav-item d-none d-sm-inline-block">
        <a href="{{url('/structureCase')}}" class="nav-link">@lang('app.home')</a>
      </li> --}}
    </ul>

    
    <!-- Right navbar links -->
    <ul class="navbar-nav mr-auto-navbav">
      <!-- Messages Dropdown Menu -->
     

          <div class="dropdown-divider"></div>
          {{-- <a href="#" class="dropdown-item dropdown-footer"> @lang('app.Notification_limit')</a> --}}
        </div>
      </li>
      
      {{-- <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
          <i class="fas fa-th-large"></i>
        </a>
      </li> --}}
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-indigo elevation-4" >
    <!-- Brand Logo -->
    <a href="#" class="brand-link" style="cursor: default;">
      <img src="{{asset('/images/chefaa-logo-new-green.png')}}" alt="AdminLTE Logo" class="brand-image  ">
      <span class="brand-text font-weight-light text-bold" ><b> Chefaa</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 mb-3 d-flex">
        <div class="image">
          {{-- <img src="{{asset('dist/img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image"> --}}
        </div>
        <div class="info">
        <h5>


       <div class="custom-control custom-switch mt-2 mb-0  d-flex justify-content-center">
          <input type="checkbox" class="custom-control-input darkMode text-lg" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1"><i class="fas fa-adjust"></i></label>
        </div>

        </h5>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column  nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

            


                <li class="nav-item" >
                    @if(url()->current() == url('/')   || url()->current() == url('/'))
                      <a href="{{route('products')}}" class="nav-link active">
                    @else
                      <a href="{{route('products')}}" class="nav-link">
                    @endif
                      <i class="fas fa-atlas"></i>
                        <p>products</p>
                      </a>
                  </li>



                 <li class="nav-item" >
                    @if(url()->current() == url('/Pharmacies')   || url()->current() == url('/Pharmacies'))
                      <a href="{{route('Pharmacies')}}" class="nav-link active">
                    @else
                      <a href="{{route('Pharmacies')}}" class="nav-link">
                    @endif
                      <i class="fas fa-atlas"></i>
                        <p>Pharmacies</p>
                      </a>
                  </li>



        

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
    <div id="app">

      @yield('content')

    </div>
  <!-- Content Wrapper. Contains page content -->

  <!-- /.content-wrapper -->
  <footer class="main-footer not-print">
    <strong>Copyright &copy;  <a href="#" target="_blank"> Chefaa  </a>.</strong>

  
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="{{asset('plugins/jquery/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{asset('plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>

<!-- Bootstrap 4 rtl -->
<script src="https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js"></script>
<!-- Bootstrap 4 -->
<script src="{{asset('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- ChartJS -->
<script src="{{asset('plugins/chart.js/Chart.min.js')}}"></script>
<!-- Sparkline -->
<script src="{{asset('plugins/sparklines/sparkline.js')}}"></script>
<!-- JQVMap -->
<script src="{{asset('plugins/jqvmap/jquery.vmap.min.js')}}"></script>
<script src="{{asset('plugins/jqvmap/maps/jquery.vmap.world.js')}}"></script>
<!-- jQuery Knob Chart -->
<script src="{{asset('plugins/jquery-knob/jquery.knob.min.js')}}"></script>
<!-- daterangepicker -->
<script src="{{asset('plugins/moment/moment.min.js')}}"></script>
<script src="{{asset('plugins/daterangepicker/daterangepicker.js')}}"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
<!-- Summernote -->
<script src="{{asset('plugins/summernote/summernote-bs4.min.js')}}"></script>
<!-- overlayScrollbars -->
<script src="{{asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('dist/js/adminlte.js')}}"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{asset('dist/js/pages/dashboard.js')}}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{asset('dist/js/demo.js')}}"></script>


<script src="{{ asset('js/app.js') }}"></script>
  <!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</body>
</html>
