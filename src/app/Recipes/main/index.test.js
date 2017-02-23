import '../../Recipes';

describe('component: Recipes', () => {
    let component;
    let scope;
    let $componentController;

    beforeEach(angular.mock.module('rn.recipes'));

    beforeEach(() => {
        inject(($rootScope, _$componentController_) => {
            scope = $rootScope.$new();
            $componentController = _$componentController_;

            component = $componentController('recipes', {
                $scope: scope
            });
        });
    });

    it('should instantiate the Recipes component', function () {
        expect(component).toBeDefined();
    });
});
