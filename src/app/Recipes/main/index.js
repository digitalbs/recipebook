import template from './index.html';

/**
 * Controller recipesCtrl component
 * @class  RecipeCtrl
 * @contructor
 */
class RecipeCtrl {
    constructor($stateParams, RecipeResource, $mdSidenav) {
        this.RecipeResource = RecipeResource;
        this.$stateParams = $stateParams;
        this.$mdSidenav = $mdSidenav;

        this.recipes = RecipeResource.query({
            username: $stateParams.username
        });
    }

    toggleRight() {
        this.$mdSidenav('right')
            .toggle();
    }

    saveRecipe() {
        this.RecipeResource.save({
            username: this.$stateParams.username
        }, this.recipeForm).$promise.then((recipe) => {
            this.recipes.push(recipe);

            this.closeRecipeForm();
        });
    }

    closeRecipeForm() {
        this.$mdSidenav('right').close();
    }
}

export default {
    templateUrl: template,
    bindings: {},
    controller: RecipeCtrl
};

RecipeCtrl.$inject = ['$stateParams', 'RecipeResource', '$mdSidenav'];
