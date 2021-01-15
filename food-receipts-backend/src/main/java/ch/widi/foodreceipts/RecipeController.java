package ch.widi.foodreceipts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

  private final RecipeRepository recipeRepository;

  @Autowired
  public RecipeController(RecipeRepository recipeRepository) {
    this.recipeRepository = recipeRepository;
  }

  @GetMapping()
  public List<RecipeDo> getRecipes() {
    return recipeRepository.findAll();
  }

  @PostMapping
  public RecipeDo createRecipe(@RequestBody RecipeDo recipeDo) {
    if(recipeDo.isNew()) {
      return this.recipeRepository.save(recipeDo);
    }
    else {
      throw new IllegalArgumentException("Entity not new");
    }
  }

  @PutMapping
  public List<RecipeDo> updateRecipies(@RequestBody List<RecipeDo> recipeDo) {
    return this.recipeRepository.saveAll(recipeDo);
  }
}
