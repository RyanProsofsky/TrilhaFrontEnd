
of(1, 2, 3, 4, 5, 6).pipe(mapTo('request')).subscribe(console.log);

of(1, 2, 3, 4, 5, 6)
    .pipe(map((v) => v + 10))
    .subscribe(console.log);