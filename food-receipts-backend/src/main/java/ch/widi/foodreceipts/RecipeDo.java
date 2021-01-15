package ch.widi.foodreceipts;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class RecipeDo extends AbstractPersistable<Long> {
  private String name;
  private String description;
  private String imagePath;

  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinColumn(name = "recipe_fk")
  private Set<IngredientDo> ingredients;
}
