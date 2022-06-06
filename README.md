<h1 align="center" style="font-size: 50px;">
Event Tracker Project
</h1>
<h3 align="center">
Week 12 Homework for Skill Distillery
</h3>

# Table of Contents
* <a href="#creator"> Creator</a>
* <a href="#overview"> Overview</a>
* <a href="#features"> Description</a>
* <a href="#implementation"> Implementation</a>
* <a href="#technologies-used"> Technologies Used</a>
* <a href="#lessons-learned"> Lessons Learned</a>

<h2 dir="auto">
<a id="creator" class="anchor" aria-hidden="true" href="#creator"></a>

# Creator
</h2>

<b>Christopher Brite</b>

* <a href="https://github.com/cmbrite">GitHub </a>
* <a href="www.linkedin.com/in/christopher-brite">LinkedIn </a>

<h2 dir="auto">
<a id="overview" class="anchor" aria-hidden="true" href="#overview"></a>

# Overview
</h2>

Study Your Class Off is an all purpose journal for tracking daily study sessions.  Users are able to create, read, edit and delete study session entries to keep track of their learning progress. 


<h2 dir="auto">
<a id="features" class="anchor" aria-hidden="true" href="#features"></a>

# Features
</h2>


* Create new study session entries
* Edit existing study sessions
* Delete existing study sessions
* List all existing study session entries


 <b><em>Future Implementations</em></b>

* Web Interface
* User account creation
* User created study goals
* Achievements


<h2 dir="auto">
<a id="implementation" class="anchor" aria-hidden="true" href="#implementation"></a>

# Implementation
</h2>

Currently access to the functionality of this application is limited to Postman. <br> The paths to execute the various available features are as follows:<hr>

<table>
  <tr>
    <th>Description</th>
    <th>HTTP method</th>
    <th>REST route URI</th>
  </tr>
  <tr>
    <td>List all existing study session entries</td>
    <td><b>GET</b></td>
    <td>http://localhost:8083/api/studies</td>
  </tr>
  <tr>
    <td>List a specific session entry by its id</td>
    <td><b>GET</b></td>
    <td>http://localhost:8083/api/studies/{id}</td>
  </tr>
  <tr>
    <td>Create new study session entry</td>
    <td><b>POST</b></td>
    <td>http://localhost:8083/api/studies</td>
  </tr>
  <tr>
    <td>Edit an existing study session entry by its id</td>
    <td><b>PATCH</b></td>
    <td>http://localhost:8083/api/studies/{id}</td>
  </tr>
  <tr>
    <td>Delete existing study session entry by its id</td>
    <td><b>DELETE</b></td>
    <td>http://localhost:8083/api/studies/{id}</td>
  </tr>
</table><br>

<em> {id} in URIs will be replaced by the corresponding session entry's id.</em> 

<h2 dir="auto">
<a id="technologies-used" class="anchor" aria-hidden="true" href="#technologies-used"></a>

# Technologies Used
</h2>

* Java
* Spring MVC
* Spring Boot
* JPA
* SQL
* MySQLWorkbench
* Terminal
* Git
* GitHub
* SpringToolSuite4
* Hibernate
* Gradle
* Postman


<h2 dir="auto">
<a id="lessons-learned" class="anchor" aria-hidden="true" href="#lessons-learned"></a>

# Lessons Learned
</h2>

* Services like Spring Boot and REST really simplify the implementation of CRUD. 
* Planning out or being familiar with the database you are working with before writing any code 
* The initial setup of a project is crucial and troubleshooting time can be minimized by being attentive during that process. 


