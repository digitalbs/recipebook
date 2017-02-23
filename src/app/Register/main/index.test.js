import '../../Register';

describe('component: Register', () => {
    let component;
    let scope;
    let $componentController;

    beforeEach(angular.mock.module('rn.register'));

    beforeEach(() => {
        inject(($rootScope, _$componentController_) => {
            scope = $rootScope.$new();
            $componentController = _$componentController_;

            component = $componentController('register', {
                $scope: scope
            });
        });
    });

    it('should instantiate the Register component', function () {
        expect(component).toBeDefined();
    });

    describe('submit', () => {
        it('will call the register user resource', () => {

        });
    });
});
