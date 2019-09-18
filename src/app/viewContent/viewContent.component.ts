import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewContent',
  templateUrl: './viewContent.component.html',
  styleUrls: ['./viewContent.component.scss']
})
export class ViewContentComponent implements OnInit {

  data;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    let id = this.router.snapshot.params.id;
    this.setData(parseInt(id));
  }
  setData(id) {
    switch (id) {
      case 1:
        this.data = [
          {
            desc: 'EXPERIMENT N°1', staff: 'Brushless', fileName: 'Brushless.pdf', link: 'https://drive.google.com/open?id=1gGSzWiAELeVHNMnsY-1l3WqMrkglPyYQ'
          },
          {
            desc: 'EXPERIMENT N°2', staff: 'Generator no load characteristic', fileName: 'Generatornoload.pdf', link: 'https://drive.google.com/open?id=12Ac8P7XbCLXGVUxY6-X2IfUZtF1SiMSO'
          },
          {
            desc: 'EXPERIMENT N°3', staff: 'Generator load characteristic ', fileName: 'Generatorload.pdf', link: 'https://drive.google.com/open?id=1qsG1D8hSycoRPpomfXhwlbdYCyFbVTZq'
          },
          {
            desc: 'EXPERIMENT N°4', staff: 'Regulation performances characteristics ', fileName: 'Regulation.pdf', link: 'https://drive.google.com/open?id=1z0qy1yG-anZ-sHynZVguOhewhbO3lJly'
          },
          {
            desc: 'EXPERIMENT N°5', staff: 'Automatic synchronization ', fileName: 'Automatic.pdf', link: 'https://drive.google.com/open?id=1Ws5a1iMsxBJHnlPFRQJiqWxBFu7Yv0s0'
          },
          {
            desc: 'EXPERIMENT N°6', staff: 'Overcurrent protection ', fileName: 'Overcurrent.pdf', link: 'https://drive.google.com/open?id=1aZ05H6Gl9EB8wzwnos-R7MY3cgLbAb2C'
          },
          {
            desc: 'EXPERIMENT N°7', staff: 'Over-voltage or under-voltage protection ', fileName: 'Over-voltage.pdf', link: 'https://drive.google.com/open?id=1ykztbr0TzwhKxY1qcXbLDyR8BcPlY925'
          },
          {
            desc: 'EXPERIMENT N°8', staff: 'Over-frequency or under-frequency protection', fileName: 'Over-frequency.pdf', link: 'https://drive.google.com/open?id=1m5b1DSdbC6ZX58DI1VUSFXVQLsjkBFsi'
          },
        ];
        break;
      case 2:
        this.data = [
          {
            desc: 'EXPERIMENT N°1', staff: 'Relation between a pitch control system and wind ', fileName: 'Relation.pdf', link: 'https://drive.google.com/open?id=17lfR2tz2SI8QoJJu4ShVR2TvvI3gA0ra'
          },
          {
            desc: 'EXPERIMENT N°2', staff: 'Analysis of the mechanical parameters within an induction generator ', fileName: 'Analysisofthemechanical.pdf', link: 'https://drive.google.com/open?id=14B903iWZY1wNNEu9pIni7mSB2z-Q3rn6 '
          },
          {
            desc: 'EXPERIMENT N°3', staff: 'Analysis of electrical parameters within an induction generator  ', fileName: 'Analysisofelectricalparameters.pdf', link: 'https://drive.google.com/open?id=1GydWvh2bh1SnNPGw8G8xAKD2nzZLAlZv        '  }
        ]
        break;
      case 3:
        this.data = [
          { desc: 'EXPERIMENT N°1', staff: 'Characterization of a photovoltaic panel without a load', fileName: 'load.pdf', link: 'https://drive.google.com/open?id=1gEAk7xs_OzjRRvOWYnul1wMb1qiH4Q02' },
          { desc: 'EXPERIMENT N°2', staff: 'Characterization of a photovoltaic panel with a load', fileName: 'withoutLoad.pdf', link: 'https://drive.google.com/open?id=15NxsAJOrQ-webffdaT9jESBtiJqrsK0F' },
          { desc: 'EXPERIMENT N°3', staff: 'Connecting a photovoltaic system to the real network by using an inverter grid system mono phase ', fileName: 'Connectingaphotovoltaic.pdf', link: 'https://drive.google.com/open?id=1y0IwMcgL-81xx726Nh_YGtjCUEbLdZjK' },
        ]
        break;
      case 4:
        this.data = [
          {
            desc: 'EXPERIMENT N°1', staff: 'Vector group ', fileName: 'Vector.pdf', link: 'https://drive.google.com/open?id=1Vp4zZcPzhiyvs9xiHHFpzEMll52ms_xV'
          },
          {
            desc: 'EXPERIMENT N°2', staff: 'No load performance', fileName: 'Noload.pdf', link: 'https://drive.google.com/open?id=17yeSelGSBHJrL-PjugnVzmfTyluhouQZ'
          },
          {
            desc: 'EXPERIMENT N°3', staff: 'Load performance', fileName: 'Load.pdf', link: 'https://drive.google.com/open?id=1u31zrdq3VAVjIKO6RCY5kTS6GIFvwIJl'
          },
          {
            desc: 'EXPERIMENT N°4', staff: 'Asymmetrical performance  ', fileName: 'Asymmetrical.pdf', link: 'https://drive.google.com/open?id=17jD8y1HTv-7pDktJH0R52dhsInaLlUQy'
          },
          {
            desc: 'EXPERIMENT N°5', staff: 'Regulation performance  ', fileName: 'Regulation.pdf', link: 'https://drive.google.com/open?id=10GTr88EpFHSBAEzNbuMSEuH158qweA13'
          },
        ]
        break;
      case 5:
        this.data = [
          {
            desc: 'EXPERIMENT N°1', staff: 'No-load performances ', fileName: 'Brushless.pdf', link: 'https://drive.google.com/open?id=1rCPR3ULefDX5fYd_1iiVR1AFou_TbZCB'
          },
          {
            desc: 'EXPERIMENT N°2', staff: 'Matched-load performances', fileName: 'Generatornoload.pdf', link: 'https://drive.google.com/open?id=1nYfcbqYFCNIMX9sI7eEoC8kjYnjaOd5X'
          },
          {
            desc: 'EXPERIMENT N°3', staff: 'Ohmic-inductive load ', fileName: 'Generatorload.pdf', link: 'https://drive.google.com/open?id=1_QUBNFrus4p17Gbuuph9UDh42zJsPx54'
          },
          {
            desc: 'EXPERIMENT N°4', staff: 'Ohmic-capacitive load ', fileName: 'Regulation.pdf', link: 'https://drive.google.com/open?id=1VvAfQiR_PuHUBwRhdQ8uvfN_TpeS_0DV'
          },
          {
            desc: 'EXPERIMENT N°5', staff: 'Automatic compensator ', fileName: 'Automatic.pdf', link: 'https://drive.google.com/open?id=1TYx5umneyL0rBqf21UGRM6YybL7RQfCE '
          },
          {
            desc: 'EXPERIMENT N°6', staff: 'Transmission line radial network ', fileName: 'Overcurrent.pdf', link: 'https://drive.google.com/open?id=1jdVGrEtES2diW8OI5S43fxy-qFZnflwO'
          },
          {
            desc: 'EXPERIMENT N°7', staff: 'Transmission line meshed network ', fileName: 'Over-voltage.pdf', link: 'https://drive.google.com/open?id=1_SEWGrIn43ObgEiXqR2JKJw7FlCZRFk_'
          },
          {
            desc: 'EXPERIMENT N°8', staff: 'Transmission line: fault-to-earth and protection', fileName: 'Over-frequency.pdf', link: 'https://drive.google.com/open?id=1ZyyCNU0RRv4XOuZvtAAbtzBzxLnZsx_b'
          },
          {
            desc: 'EXPERIMENT N°9', staff: 'Transmission line earth fault protection', fileName: 'Over-frequency.pdf', link: 'https://drive.google.com/open?id=1EgIkbR_NokCVhJsgj6i5uMCqH7ViHNfP'
          },
          {
            desc: 'EXPERIMENT N°10', staff: 'Transmission line under voltage protection', fileName: 'Over-frequency.pdf', link: 'https://drive.google.com/open?id=1weqSc7VAfITjR7q-dC6vUAg-HgX1AtXx'
          },
          {
            desc: 'EXPERIMENT N°11', staff: 'Transmission line over voltage protection', fileName: 'Over-frequency.pdf', link: 'https://drive.google.com/open?id=13TNcYsiyhMB-CREU0aThZMWkHUqRC-Ru'
          },
        ]
        break;
      case 6:
        this.data = [
          {
            desc: 'EXPERIMENT N°1', staff: 'Contribution of solar energy', fileName: 'Brushless.pdf', link: 'https://drive.google.com/open?id=1bduBv3YSa78lKPxnVDjUp3qZZUBwe75n'
          },
          {
            desc: 'EXPERIMENT N°2', staff: 'Contribution of hydropower', fileName: 'Generatornoload.pdf', link: 'https://drive.google.com/open?id=1q-WitrO-Pcuvu-tNTfqVET8I-JKE-JZF'
          },
          {
            desc: 'EXPERIMENT N°3', staff: 'Contribution of wind plant', fileName: 'Generatorload.pdf', link: 'https://drive.google.com/open?id=1p-exDra8oAUrlDIUWl7dRiOuU58Y1uyD'
          }]
        break;

    }
  }
}
