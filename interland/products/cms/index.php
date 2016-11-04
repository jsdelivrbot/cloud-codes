<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   
   }else{
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'info@interlandtech.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@interlandtech.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);
$status = "OK";
}        
?>
<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>CMS/SMS | InterLand</title>

	<!-- Bootstrap Core CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- google fonts -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:700|Roboto+Slab" rel="stylesheet">

<!-- bundled css comes here -->

<!-- removeIf(production) -->
	<!-- Theme CSS -->
	<link href="css/0-delight.css" rel="stylesheet">
	<!-- custom css -->
	<link href="css/1-cust_style.css" rel="stylesheet">
<!-- endRemoveIf(production) -->

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	<script src="https://use.fontawesome.com/d847c7e47e.js"></script>

</head>

<body id="page-top" class="index">
	<?php if($status == "OK") echo '<div style="background-color: #00B57E; color:white; font-size:.9em;"><div class="container" style="padding: 3px;background-color: #00B57E; color:white;"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp; Your message has sent !</div></div>'; ?>

	<!-- Navigation -->
	<nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
				</button>
				<a class="navbar-brand page-scroll" href="#page-top"> <span style="font-size:80%;" class="" aria-hidden="true"></span> CMS <span style="color: #ff5c51;">|</span> SMS </a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="hidden">
						<a href="#page-top"></a>
					</li>
					<li>
						<a class="page-scroll" href="../../products.php#cms-solutions">HOME</a>
					</li>
					<li>
						<a class="page-scroll" href="#services">Why our products</a>
					</li>
					<li>
						<a class="page-scroll" href="#portfolio">Modules</a>
					</li>
					<li>
						<a class="page-scroll" href="#pricing">Pricing</a>
					</li>
					<li>
						<a class="page-scroll" href="#contact">Contact us</a>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>

	<!-- Header -->
	<header>
		<div class="container">
			<div class="intro-text">
				<div class="intro-lead-in">We Are Here To Help, Because</div>
				<div class="intro-heading">we got what you need</div>
				<a href="#services" class="page-scroll btn btn-xl">Features</a>
			</div>
		</div>
	</header>

	<!-- Services Section -->
	<section id="services">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Why CMS / SMS</h2>
					<br>
					<br>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-md-4">
					<span class="fa-stack fa-4x">
					<span style="font-size:100px;" class="glyphicon glyphicon-ok-circle text-primary" aria-hidden="true"></span>
					</span>
					<h4 class="service-heading">User Friendly</h4>
					<p class="text-muted">CMS is the only browser-based application developed for Educational Institutions. This makes its use as easy as browsing the net.</p>
				</div>
				<div class="col-md-4">
					<span class="fa-stack fa-4x">
<span style="font-size:100px;" class="glyphicon glyphicon-leaf text-primary" aria-hidden="true"></span>
					</span>
					<h4 class="service-heading">Cost Effective</h4>
					<p class="text-muted">CMS works efficiently on a P-I PC and hence no/least hardware upgrade is required. We provide FREE updates to the solution from time to time.</p>
				</div>
				<div class="col-md-4">
					<span class="fa-stack fa-4x">
<span style="font-size:100px;" class="glyphicon glyphicon-th text-primary" aria-hidden="true"></span>
					</span>
					<h4 class="service-heading">Scalabile</h4>
					<p class="text-muted">CMS is based on an open ended architecture, enabling the solution to be implemented in phases and actualizing future upgrades without disturbing the existing implementation.</p>
				</div>

				<div style="margin-top: 50px; display: inline-block;">
					<a href="downloadables/cms.pdf" download="true" id="cms-download" class="btn btn-primary reddish">Download CMS Brochure</a>
					<a href="downloadables/sms.pdf" download="true" id="sms-download" class="btn btn-primary reddish">Download SMS Brochure</a>
					<iframe id="for-downladable" style="display:none;"></iframe>
				</div>
			</div>
		</div>
	</section>

	<!-- Portfolio Grid Section -->
	<section id="portfolio" class="bg-light-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Modules</h2>
					<br>
					<br>
				</div>
			</div>
			<div class="row">
				<!-- tabs -->

				<div class="col-md-12 col-sm-12 col-xs-12 bhoechie-tab-container">
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
						<div class="list-group">
							<a href="#" class="list-group-item active text-center">
								<h4><i class="fa fa-users" aria-hidden="true"></i></h4> User Role Management

							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-road"></h4>
								<br/>Registration System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-home"></h4>
								<br/>Staff Information Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-cutlery"></h4>
								<br/>Students Information Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Students Promotion
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Students Attendance System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Transportation System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Bus Tracking System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Fee Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Chat / Communication System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Mobile Application System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Educational & Certificate System
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Time Table Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Academic Evaluations
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Information / Inquiry / Counseling
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Library Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Canteen Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Course / Syllabus Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Event Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Hostel Management
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Inventory
							</a>
							<a href="#" class="list-group-item text-center">
								<h4 class="glyphicon glyphicon-credit-card"></h4>
								<br/>Payroll Management
							</a>
						</div>
					</div>
					<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
						<!-- User Role Management -->
						<div class="bhoechie-tab-content active">

							<h1>User Role Management</h1>

							<p>The front view of the system consists of different login page with which a user is prompted to login in to the system through his user name and password. Upon the student's login, his/her details are updated in to the system. When all data is entered, the student can not only view their details but also view their exams and report details. When the student's session ends, all data is saved. Staff can also login to the system with their id and password and has access to the system. There will be a special login name and password (to prevent students in updating their details other than profile) to allow the teacher to access all student data in a table form. Here, the administrator can add students and staff to the system andchange student and staff details.</p>
							<ul>
								<li>Desired number of users can be formed</li>
								<li>Usage authorities can be defined, modified and observed anytime</li>
								<li>Alerts can be send to the user for effective communications</li>
							</ul>

						</div>
						<!-- train section -->
						<div class="bhoechie-tab-content">
							<h1>Registration System</h1>

							<h3>Staff Registration System</h3>
							<p>Staff registration is the process of registering the college/school staff (HOD, Lecturer, Course advisor,Other Staffs).The registering process is done by the Admin of Concerned Colleges/Schools and can also edit the details for the existing staffs. S/He can change the status of the staff to active/in-active.</p>
							<ul>
								<li>Staff will be provided User name and password to system.</li>
								<li>Staff registration will be linked to Library, Transportation, Accounts, Staff management to view.</li>
								<li>Upon successful completion of registration, Staff will be provided User name and password to system.</li>
								<li>View information of any staff by Subject wise, ID wise.</li>
								<li>Able to take the printouts of login credentials at any time.</li>
								<li>Keeping the records of withdrawn staffs for future use if the staff comes back to college/school.</li>
								<li>Saving staffs data for the upcoming educational year.</li>
							</ul>
							<br>
							<h3>Student Registration System</h3>
							<ul>
								<li>Optimization of Student’s registration Process to any course available</li>
								<li>Upon successful completion of registration, Student will be provided with user name and password to system</li>
								<li>View information of any student by Course wise, ID wise.</li>
								<li>Able to take the printouts of login credentials at any time</li>
								<li>Saving students and parents data for the upcoming educational year.</li>
								<li>Keeping the records of withdrawn students for future use if the student comes back to school</li>
								<li>Promote selected students or all students to next level.</li>

							</ul>
						</div>

						<!-- hotel search -->
						<div class="bhoechie-tab-content">
							<h1>Staff Information Management </h1>

							<p>Staff Information module deals mainly with :</p>
							<ul>
								<li>Profile: This provides personal details of the staff.</li>
								<li>Attendance: This provides the staff with his/her attendance details.</li>
								<li>Salary: This provides the staff with his/her salary details.</li>
								<li>Feedback: This feature enables the staff to provide feedbacks to the management.</li>
								<li>View Student Details: This provides the staff to view the student details.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Students Information Management</h1>
							<br>
							<ul>
								<li>After login Parents can view all their children profile information, manipulate their information subject to restriction of their courses and fees details and ID.</li>
								<li>It will be linked to Library,Transportation,Fees, Student management to view.</li>
								<li>Student related information with any department or dues can be tracked.</li>
								<li>Student related information with any department or dues can be tracked.</li>
								<li>Student Assignments, Homeworks, Projects and Tests can be evaluated.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Students Promotion</h1>
							<br>

							<p>Student Promotion allows you to promote students to the next level at the end of the academic year.</p>
							<ul>
								<li>It also allows you to promote the failed students to next batch according to the college/school policies.</li>
								<li>It allows you to promote all the students of a particular student to higher level.</li>
								<li>The details of the students automatically get updated in the student details as perthe details of the student promotion.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Students Attendance System</h1>
							<br>
							<ul>
								<li>Manage and Track the student attendance</li>
								<li>Teachers can mark the attendance of the students in their class</li>
								<li>Students and Parents can only view the attendance</li>
							</ul>
							<p>Attendance System shows the:</p>
							<ul>
								<li>Number of Working days</li>
								<li>Number of Weekends</li>
								<li>Number of Holidays</li>
								<li>Number of Absent Days</li>
								<li>Number of Tardy Days</li>
								<li>Details of excused and unexcused absent and tardy days</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Transportation System</h1>
							<br>
							<p>Benifits for Administration</p>
							<br>
							<ul>
								<li>Creating information card for each bus</li>
								<li>Creating information card for each driver and connecting them with the HR system.</li>
								<li>Identifying bus routes.</li>
								<li>Distributing the students automatically to the right bus.</li>
								<li>Following up the internal and external buses maintenance.</li>
								<li>Following up buses insurance contracts and driver's licenses.</li>
								<li>Following up monthly distances and recording oil consumption.</li>
								<li>Transport can be One Way or Two Way depending on the requirement</li>
								<li>Student’s data enrolled for using of Transport service of Institute, student’s fees collected</li>
								<li>Students dues OR students enrolled date and valid dates.</li>
								<li>Facility to provide Transport pass with printing option can be included in this module and also in Student Management</li>
							</ul>
							<p></p>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Bus Tracking System</h1>
							<br>
							<p>Benifits for Administration</p>
							<br>
							<ul>
								<li>Real Time school bus tracking on mobile phones.</li>
								<li>Bus route optimization to reduce turnaround time,fuel consumption and expenses.</li>
								<li>Real time notifications in case of speed limit violations, vehicle breakdown or other emergency situation.</li>
								<li>Customized reports for the management related to bus timings, driving patterns or route taken by the driver to avoid illegitimate usage of transport system.</li>
							</ul>
							<br>
							<p>Benifits for Parents</p>
							<ul>
								<li>Allows parents to view the real time location of their children’s bus on their mobile.</li>
								<li>Peace of mind and reduced waiting time at bus stops every day.</li>
								<li>Allows them to drop their child to the next bus stop in case they miss the bus.</li>
								<li>Ensures safety and timely transit of students when they travel to college/school and back.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Fee Management</h1>
							<br>
							<p>Comprehensively manages the financial operationsrelated to students and their parents. and has the following features.</p>

							<ul>
								<li>Provide secure online payment options – through debit cards, credit cards and net banking facility</li>
								<li>Provides facility to generate due fees report easily and atany point of time.</li>
								<li>Display of fees remaining on part payment of fees.</li>
								<li>Fee collections includes fee collection Course wise, Fee Collection Pending, Project fee collection, refundable fees, fixed fees, security deposits of students, Mode of collection of fees, student deposit details</li>
								<li>Generate automated receipts, making human error history.</li>
								<li>Parents can easily access and download receipts from their dashboards</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Chat / Communication System</h1>
							<br>
							<h3>Students Chat</h3>
							<p>Students can communicate by replying the messages sent specifically to them or global messages sent by teacher and admin people.</p>
							<br>
							<h3>Parents Chat</h3>
							<p>The parents can see all the messages communicated to student.</p>
							<br>
							<h3>Teacher Chat</h3>
							<p>The teacher can pass some message privately to parent which the student will not be able to see.</p>
							<br>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Mobile Application System</h1>
							<br>
							<ul>
								<li>Connected to the college/school database</li>
								<li>Ability to send SMS to parents</li>
								<li>Ability to send financial claims to all parents</li>
								<li>Ability to schedule a future SMS to be send automatically</li>
								<li>Ability to create different groups of students, lecturers and parents to send them SMS.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Educational & Certificate System</h1>
							<br>
							<p>The educational and certificatessystem aims to manage the educationalsubjects and studentsmarks and has the following features</p>
							<ul>
								<li>The system provides supports to the marks system</li>
								<li>Identifiers subject to the branch and class</li>
								<li>Covers all types of exams</li>
								<li>Calculates subject's Marks and the GPA and the student's annual marks</li>
								<li>Issues monthly, quarterly and yearly report cards</li>
								<li>Issues report cards and final grades reports taking into consideration Ministry of Education laws and regulations</li>
								<li>Issues all the reports related to time tables, subjects and grades</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Time Table Management</h1>
							<br>
							<p>This system aims to automatically generate timetables within the college/school requirements in orderto limit human mistakes and to save work time.it has the following features.</p>
							<ul>
								<li>Defining class timing.</li>
								<li>Defining grades, subjects and their weekly classes.</li>
								<li>Defining sections and link them with the subject's lecturers.</li>
								<li>Defining the unavailable times for part time lecturers.</li>
								<li>Defining groups subjects and merged classes.</li>
								<li>Defining and considering school terms to create time tables.</li>
								<li>Automatically generating the time table according to the department, the grade.</li>
								<li>Providing timetables for sections, lecturers, subjects, sessions and students.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Academic Evaluations</h1>
							<br>
							<h3>Assignment</h3>
							<br>
							<ul>
								<li>Entering marks of students and creating a report card is a very tedious and time consuming job and waste much of the time of lecturer. In this software you just need tto enter marks of students and you can easily generate the report card along with grade calculation according to the exam marking scheme.</li>
								<li>Generates result of students for different examination and different types of exams during the year.</li>
								<li>Manage the results of the college/school students and keep a record of results of the students throughout the year.</li>
							</ul>
							<h3>Tests / Exam</h3>
							<br>
							<ul>
								<li>Distribute and manipulate assignment with defined due dates, subject notes and resources to students instantly.</li>
								<li>Upload notes /assignments for the students.</li>
								<li>Download notes / assignments by the students.</li>
								<li>Online submission of notes / assignments by the students.</li>
								<li>Lecturer can download, evaluate and give comments on the assignment submitted by the students.</li>
							</ul>
							<h3>Projects & Homeworks</h3>
							<br>
							<ul>
								<li>Distribute and manipulate Project / Homework with defined due dates, subject notes and resources to students instantly.</li>
								<li>Upload Project / Homework for the students.</li>
								<li>Download Project / Homework by the students.</li>
								<li>Online submission of Project / Homework by the students.</li>
								<li>Teacher can download, evaluate and give comments onthe Project / Homework submitted by the students.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Information / Inquiry / Counseling</h1>
							<br>
							<ul>
								<li>Covers the information regarding institution -Profile,Contact Details,History.</li>
								<li>Covers the reports of previous years result course wise.</li>
								<li>Display all information related to course/syllabus.</li>
								<li>Admin have the privilege to add/manipulate contact details,courses offered,structure of all courses individually.</li>
								<li>Parents can able to inquire the required information about the college/school and its reputation in the market before taking admission.</li>
								<li>Designed to answer all the questions and resolve the doubts and queries of parents/ students before they take admission in the college/school.</li>
								<li>Get the detailed admission form filled up by the interested candidates.</li>
								<li>Collecting and verifying the documents of the previous education details.</li>
								<li>Confirming/ rejecting the candidates, post verification of details and documents.</li>
								<li>Generating the unique login id and password for the students and their parents.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Library Management</h1>

							<p>The Library management of college/school appears a very challenging task with constant addition/issue/ renewal of books. A perfect solution appears in the shape of the college/school library management software of ITS Solutions. The software does the librarian work in an automated manner with options like an easy book search. It further keeps complete track of book issue/ return details to easily check the status and availability of a particular book. College/school library management software is a Robust System Based on industry standards Intuitive, and easy to use. Scalability makes it a solution for automation of small and large college/school libraries. Move to automation is easy for a college/school with an ergonomic design further adding to the simplicity quotient and helping library staff to deliver a quicker service.</p>
							<p>Computerized design allows library staff to provide services easily and quickly </p>
							<ul>
								<li>Excel Import/Export facility for easy maintenance of book records </li>
								<li>Books category management </li>
								<li>Comprehensive reports of issued, overdue, fine applicable, defaulters, circulation etc </li>
								<li>Books are easily located within the racks </li>
								<li>E-library members management </li>
								<li>Books acquisition record and requirement </li>
								<li>Subscriptions and membership management </li>
								<li>Multi located library featured setup </li>
								<li>High security and customized access rights can be managed </li>
								<li>Additional features add-on's available </li>
								<li>Barcode generation and printing facility </li>
								<li>Restoration and data backup facility </li>
								<li>Revenue collection via fine's, donations reports</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Canteen Management</h1>

							<p>Canteen management system in Interland College/school ManagementSoftware helps you to manage the canteen in your college/school efficiently. The functions of the canteen management system are</p>
							<ul>
								<li>Consolidated utilization report of multi located canteens </li>
								<li>Daily menu creation in canteen management software</li>
								<li>Canteen sales report can be created</li>
								<li>Software billing system with applicable taxes</li>
								<li>Coupons system, meals passes can be provided</li>
								<li>Integration with payroll system</li>
								<li>Automated processes increases efficiencies</li>
								<li>Stock and inventory records to avoid wastage of raw material</li>
								<li>Reconciliation of accounts can be customized</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Course / Syllabus Management</h1>
							<br>
							<h3>College/school Courses Management</h3>
							<ul>
								<li>Management of course:- registration, affiliation, pre-requisites etc</li>
								<li>Entire details of course structure to help students in planning of the study schedules</li>
								<li>Pre-existing course content inclusive of summary, tenure, syllabus, important dates</li>
								<li>Customized placement of course content</li>
								<li>Integration with number of students in each course</li>
								<li>Integration with number of students in each course</li>
								<li>Online delivery system of course content materials and course content package</li>
								<li>Modifications, functionality and updation are auto generated</li>
							</ul>
							<br>
							<h3>College/school Syllabus Management</h3>
							<br>
							<ul>
								<li>Online syllabus is the most effective way of alteration and communication of the syllabus to the students</li>
								<li>Completion tracking report can be viewed within the provided time frame</li>
								<li>Upload or download syllabus options</li>
								<li>Course books information with publisher details</li>
								<li>Efficient multi user friendly environment</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Event Management</h1>

							<p>The main idea of this project is used to maintain the College/school Event information and organize the event. The event management system is useful for the students that help the user to provide information regarding the event that are conducted in college/school. Event Management System to schedule rooms across campus for events, meetings, and classes. With this software users can</p>
							<ul>
								<li>See what activities are scheduled at a certain time in a certain room.</li>
								<li>Request a room for a meeting or event</li>
								<li>Request that the room be set up in a specific configuration for an event.</li>
								<li>Request special services in addition to the room, such as audio/visual equipment, security personnel, or special furniture requests.</li>
								<li>Increase student involvement in all appropriate facets of college/school operations.</li>
								<li>Enhance communication and cooperation among all segments of the college/school community.</li>
								<li>Promote other activities which enhance the academic, social and cultural growth of students.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Hostel Management</h1>
							<br>
							<p>Hostel management is crucial part of the college/school operations and effective system should be in place to keep it managed and make easier for students to get the hostel facility. The college/school hostel management software system of ITS Solutions makes both these things possible by offering a supreme set of features. The software maintains records related to students lodging, their meals, room transfer and other hostel facilities. Students will be able to apply for hostel facility online and the software will deal with all the proceedings and check the room availability and automatically complete the procedure.</p>
							<p>The systematic approach followed by InterLand's college/school management software includes:</p>
							<ul>
								<li>Store hostel details like Boys/Girls/Staff and the location</li>
								<li>Room details, availability, shifting, assets and facilities.</li>
								<li>Details of students along with room number and other details.</li>
								<li>Student and visitor in/out attendance.</li>
								<li>Store records related to maintenance, mess bill and hostel charges.</li>
							</ul>

						</div>
						<div class="bhoechie-tab-content">
							<h1>Inventory</h1>
							<br>
							<p>The proceedings related to the buying/selling/managing of different materials of college/school needs appropriate handling to ensure complete organization and this is made possible by the college/school store management software. Store of a college/school includes different inventory items each having its importance. The software is capable of handling the purchase of materials, issue of items, Proper management prevents loss of any items and availability of stock. A complete purchase register and comprehensive reports are also made available by this software.</p>
							<p>The systematic work flow followed by InterLand's college/school Inventory management software includes:</p>
							<ul>
								<li>Maintaining sale/purchase records in a systematic manner.</li>
								<li>View reports and print receipts easily.</li>
								<li>Regulate the stock in the store with items arranged in categories making it easier to get complete records of stock.</li>
								<li>Search the store from computer for any item and find it easily along with a detailed report of the item.</li>
								<li>Software takes total responsibility of the college/school store with its features that are fit for flawless college/school store management.</li>
							</ul>
						</div>
						<div class="bhoechie-tab-content">
							<h1>Payroll Management</h1>
							<br>
							<ul>
								<li>All the ESI, PF, Income tax, sales tax deductions, submission reports</li>
								<li>Compensation, benefits, claims statements</li>
								<li>Expenses categorized reports for budget motorization</li>
								<li>Systematic management of salary, net pay, gross, wages, deductions management according to the remuneration</li>
								<li>Statuary compliances reports</li>
								<li>Complete monetary management and accounting charts</li>
								<li>Various printing with filtrations facilitations</li>
								<li>Raise compliance with ever-changing legal rules and regulations</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
	</section>

	<!-- Pricing -->
	<section id="pricing" style="background-image: url('')">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Pricing</h2>
					<br>
					<br>
				</div>
			</div>
			<div class="row">
				<!-- beginner -->
				<div class="col-md-8">
					<div class="row">
						<div class="col-md-6">
							<div class="price-card">
								<center>
									<div class="card-header" style="background-color:#ABABAB;">
										<i class="fa fa-child" aria-hidden="true"></i>
										<h2>Beginner</h2>
									</div>
									<div class="card-body">
										<ul class="list-group">
											<li class="list-group-item">User Role Management</li>
											<li class="list-group-item">Registration System</li>
											<li class="list-group-item">Student Attendance System</li>
											<li class="list-group-item">Transportation System</li>
											<li class="list-group-item">Fee Management</li>
											<li class="list-group-item">Chat / Communication</li>
											<li class="list-group-item" style="color:#FFF; background-color:#A6A6A6; font-size:120%;"><strong>&cent; 0.5</strong> per student</li>
										</ul>
									</div>
									<a href="mailto:info@interlandtech.com?subject=OrderCMS-BEGINNER" class="btn btn-gray">Order Now</a>
								</center>

							</div>
						</div>
						<div class="col-md-6">
							<div class="price-card">
								<center>
									<div class="card-header" style="background-color:#318F85;">
										<i class="fa fa-coffee" aria-hidden="true"></i>
										<h2>Economy</h2>
									</div>
									<div class="card-body">
										<ul class="list-group">
											<li class="list-group-item">User Role Management</li>
											<li class="list-group-item">Registration System</li>
											<li class="list-group-item">Student Attendance System</li>
											<li class="list-group-item">Transportation System</li>
											<li class="list-group-item">Fee Management</li>
											<li class="list-group-item">Chat / Communication</li>
											<li class="list-group-item">Staff Information System</li>
											<li class="list-group-item">Student Information System</li>
											<li class="list-group-item">Education and Certificate System</li>
											<li class="list-group-item">Timetable Management</li>
											<li class="list-group-item">Academic Evaluations</li>
											<li class="list-group-item">Information Inquiry Counseling</li>
											<li class="list-group-item">Payroll Management</li>
											<li class="list-group-item" style="color: #FFF; background-color:#318F85; font-size:120%;"><strong>&cent; 0.75</strong> per student</li>

										</ul>
									</div>
									<a href="mailto:info@interlandtech.com?subject=OrderCMS-ECONOMY" class="btn btn-success btn-green">Order Now</a>
								</center>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="price-card">
						<center>
							<div class="card-header" style="background-color:#F0AD4E;">
								<i class="fa fa-university" aria-hidden="true"></i>
								<h2>Expert</h2>
							</div>
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item">User Role Management</li>
									<li class="list-group-item">Registration System</li>
									<li class="list-group-item">Student Attendance System</li>
									<li class="list-group-item">Transportation System</li>
									<li class="list-group-item">Fee Management</li>
									<li class="list-group-item">Chat / Communication</li>
									<li class="list-group-item">Staff Information System</li>
									<li class="list-group-item">Student Information System</li>
									<li class="list-group-item">Education and Certificate System</li>
									<li class="list-group-item">Timetable Management</li>
									<li class="list-group-item">Academic Evaluations</li>
									<li class="list-group-item">Information Inquiry Counseling</li>
									<li class="list-group-item">Payroll Management</li>
									<li class="list-group-item">Bus Tracking System</li>
									<li class="list-group-item">Mobile Application System</li>
									<li class="list-group-item">Library Management</li>
									<li class="list-group-item">Canteen Management</li>
									<li class="list-group-item">Course/ Syllabus Management</li>
									<li class="list-group-item">Event Management</li>
									<li class="list-group-item">Hostel Management</li>
									<li class="list-group-item">Inventory</li>
									<li class="list-group-item" style="background-color:#FFB954; font-size:120%;"><strong>$ 1</strong> per student</li>

								</ul>
							</div>
							<a href="mailto:info@interlandtech.com?subject=OrderCMS-EXPERT" class="btn btn-default btn-warning">Order Now</a>
						</center>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="impression">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<blockquote>
						<p>Whatever be the Business need are, INTERLAND's solutions can be the best fit for them ... </p>
						<footer>Someone famous in
							<cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section id="contact" class="banner-book">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<center>
						<p class="lead">Give us a feedback</p>
					</center>
				</div>
			</div>
			<div class="row contact-section">
				<div class="col-lg-12">
					<form name="sentMessage" novalidate id="contactForm" action="" method="POST">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Your Name *" id="name" name="name" required data-validation-required-message="Please enter your name.">
									<p class="help-block text-danger"></p>
								</div>
								<div class="form-group">
									<input type="email" class="form-control" placeholder="Your Email *" id="email" name="email" required data-validation-required-message="Please enter your email address.">
									<p class="help-block text-danger"></p>
								</div>
								<div class="form-group">
									<input type="tel" class="form-control" name="phone" placeholder="Your Phone" id="phone">
									<p class="help-block text-danger"></p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<textarea class="form-control" rows="8" placeholder="Your Message *" id="message" name="message" required data-validation-required-message="Please enter a message."></textarea>
									<p class="help-block text-danger"></p>
								</div>
							</div>
							<div class="clearfix"></div>
							<div class="col-lg-12 text-center">
								<div id="success">
									<br>
								</div>
								<button type="submit" class="btn btn-lg btn-success btn-green">POST</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

	<footer class="main-footer">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<span class="copyright">Copyright &copy; Interland 2016</span>
				</div>
				<div class="col-md-4">
					<ul class="list-inline social-buttons">
						<li><a href="#"><i class="fa fa-twitter"></i></a>
						</li>
						<li><a href="#"><i class="fa fa-facebook"></i></a>
						</li>
						<li><a href="#"><i class="fa fa-linkedin"></i></a>
						</li>
					</ul>
				</div>
				<div class="col-md-4">
					<ul class="list-inline quicklinks">
						<li><a href="#">Privacy Policy</a>
						</li>
						<li><a href="#">Terms of Use</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>

	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>


	<!-- Plugin JavaScript -->
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Theme JavaScript -->
	<script src="js/delight.js"></script>

</body>

</html>
