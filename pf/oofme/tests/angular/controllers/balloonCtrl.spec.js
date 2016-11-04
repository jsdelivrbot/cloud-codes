describe("balloonCtrl (controller) :", function(){
	beforeEach(module('oofme'));
	let $controller;

	 beforeEach(inject(function(_$controller_){
	 	$controller = _$controller_;
	 }));

	 describe("should define", function(){
	 	it("projectNamePrompt", function(){
	 		let $scope = {};
	 		let controller = $controller('balloonCtrl', {$scope : $scope});

	 		expect($scope.projectNamePrompt).toBeFunction();
	 	});
	 });
});