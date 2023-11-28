/**
 * Регулярно вызывает переданную функцию через интервал времению.
 */
export class Loop {

    /**
     * Числовой id setTimeout.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#return_value
     */
    private timeoutId: ReturnType<typeof setTimeout> | null;

    /**
     * Задержка в миллисекундах.
     */
    private readonly timeout: number;

    /**
     * Функция которую надо вызвать.
     */
    private readonly cb: any;

    /**
     * Флаг, указывающий, следует ли продолжать выполнение цикла. 
     */
    private shouldContinue: boolean;

    /**
     * @param cb - функция которую надо вызвать.  
     * @param timeout - задержка в миллисекундах.
     */
    constructor(cb: any, timeout = 0) {

        this.cb = cb;
        this.timeoutId = null;
        this.timeout = timeout;
        this.shouldContinue = false;
    }

    /**
     * Метод представляет одну итерацию цикла, вызывает переданную функцию и
     * запускает таймер на следующий вызов.
     */
    private loopIteration(): void {
        if (!this.shouldContinue) 
            return;

        this.cb();
        this.timeoutId = setTimeout(this.loopIteration.bind(this), this.timeout);
    }

    /**
     * Запускает цикл вызовов.
     */
    public start(): void {
        if (this.timeoutId !== null) 
            return;

        this.shouldContinue = true;
        this.loopIteration();
    }

    /**
     * Останавливает цикл вызовов.
     */
    public stop(): void {
        if (this.timeoutId === null) 
            return;

        clearTimeout(this.timeoutId);
        this.shouldContinue = false;
        this.timeoutId = null;
    }

}
