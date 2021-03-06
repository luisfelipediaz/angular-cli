import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    private minutos: number;
    private segundos: number;
    private isPaused: boolean;
    private buttonLabel: string;

    constructor() {
        this.resetTimer();
        setInterval(() => this.tick(), 1000);
    }

    private resetTimer(): void {
        this.minutos = 59;
        this.segundos = 59;
        this.buttonLabel = "Iniciar";
        this.togglePause();
    }

    private togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.segundos < 59 || this.minutos < 59)
            this.buttonLabel = this.isPaused ? "Reanudar" : "Pausar";
    }

    private tick(): void {
        if (!this.isPaused) {
            this.buttonLabel = "Pausar";
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                    this.resetTimer();
                }
            }
        }
    }

    ngOnInit() {
    }

}
