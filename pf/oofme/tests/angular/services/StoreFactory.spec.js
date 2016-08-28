// tests for StoreFactory.js
describe('Store (Factory)', function() {
	var Store;

	beforeEach(module('oofme'));

	beforeEach(inject(function(_Store_) {
		Store = _Store_;
	}));

	it('is defined', function() {
		expect(Store).toBeDefined();
	});
});
