const generate = numRows => {
    const storeys = [];

    for (let i = 1; i <= numRows; i++) {
        const prevStorey = storeys[i - 2];

        if (!prevStorey) {
            storeys.push([i]);
            continue;
        }
        if (prevStorey.length === 1) {
            storeys.push([1, 1]);
            continue;
        }

        const newStorey = [1];

        for (let j = 1; j <= i - 2; j++) {
            newStorey.push((prevStorey[j - 1] ?? 0) + (prevStorey[j] ?? 0));
        }

        newStorey.push(1);

        storeys.push(newStorey);
    }

    return storeys;
};

generate(5);
