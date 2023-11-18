import { Component } from '@angular/core';
import { EquationService } from '../equation.service';

@Component({
  selector: 'app-equation-page',
  templateUrl: './equation-page.component.html',
  styleUrls: ['./equation-page.component.scss']
})
export class EquationPageComponent {

  results :any;

  constructor(private equationService: EquationService) { }

  public triggerAlgorithm(): void {
    this.equationService.triggerAlgorithm().subscribe(
      (response) => {
        console.log('Algorithme déclenché avec succès', response);
        // Gérer la réponse du backend si nécessaire
      },
      (error) => {
        console.error('Erreur lors du déclenchement de l\'algorithme', error);
        // Gérer l'erreur
      }
    );
  }
  public updateResult(id: number, updatedResult: any): void {
    this.equationService.updateResult(id, updatedResult).subscribe(
      (response) => {
        console.log('Résultat mis à jour avec succès', response);
        // Gérer la réponse du backend si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du résultat', error);
        // Gérer l'erreur
      }
    );
  }

  public deleteResult(id: number): void {
    this.equationService.deleteResult(id).subscribe(
      (response) => {
        console.log('Résultat supprimé avec succès', response);
        // Gérer la réponse du backend si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la suppression du résultat', error);
        // Gérer l'erreur
      }
    );
  }
}
