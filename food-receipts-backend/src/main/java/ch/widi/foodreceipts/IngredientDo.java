package ch.widi.foodreceipts;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
public class IngredientDo extends AbstractPersistable<Long> {
  private String name;
  private Double amount;
}
