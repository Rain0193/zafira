<%@ page 
    language="java"
    contentType="text/html; charset=UTF-8"
    trimDirectiveWhitespaces="true"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/fragments/taglibs.jsp" %>

<div data-ng-controller="DashboardCtrl">
	<div class="row">
         <div class="col-lg-12">
         	<h2><i class="fa fa-pie-chart fa-fw"></i> Dashboard</h2><br/>
         </div>
    </div>
	<div class="row">
		<div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Test results statistics (last 5 days)
                </div>
                <div class="panel-body" style="min-height: 500px">
                    <div id="test-results-statistics"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Test owners statistics
                </div>
                <div class="panel-body" style="min-height: 500px">
                     <div id="test-owners-statistics"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Test implementation progress (last 30 days)
                </div>
                <div class="panel-body" style="min-height: 500px">
                     <div id="test-implementation-statistics"></div>
                </div>
            </div>
        </div>
	</div>
</div>

              