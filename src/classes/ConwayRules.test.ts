import { expect, test } from "vitest";
import ConwayRules from "./ConwayRules";

test("countLiveNeighbors - should return 1", () => {
    let conwayRules = new ConwayRules();

    const data = [
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ];

    let count: number = conwayRules.countLiveNeighbors(data, 0, 1);
    expect(count).toEqual(1)

    count = conwayRules.countLiveNeighbors(data, 2, 1);
    expect(count).toEqual(1)
});


test("countLiveNeighbors - should return 2", () => {
    let conwayRules = new ConwayRules();

    const data = [
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ];

    let count: number = conwayRules.countLiveNeighbors(data, 0, 0);
    expect(count).toEqual(2);

    count = conwayRules.countLiveNeighbors(data, 2, 0);
    expect(count).toEqual(2);

    count = conwayRules.countLiveNeighbors(data, 1, 1);
    expect(count).toEqual(2);

    count = conwayRules.countLiveNeighbors(data, 0, 2);
    expect(count).toEqual(2);

    count = conwayRules.countLiveNeighbors(data, 2, 2);
    expect(count).toEqual(2);
});

test("countLiveNeighbors - should return 3", () => {
    let conwayRules = new ConwayRules();

    const data = [
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ];

    let count: number = conwayRules.countLiveNeighbors(data, 1, 0);
    expect(count).toEqual(3);

    count = conwayRules.countLiveNeighbors(data, 1, 2);
    expect(count).toEqual(3);
});


test("blinker - period 2", () => {


    const vertical = [
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ];

    const horizontal = [
        [false, false, false],
        [true, true, true],
        [false, false, false]
    ];

    let data = [
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ];

    let conwayRules = new ConwayRules();

    data = conwayRules.applyRules(data);
    expect(data).toEqual(horizontal)

    data = conwayRules.applyRules(data);
    expect(data).toEqual(vertical)
})

test("toad - period 2", () => {

    const firstStage = [
        [false, false, false, false],
        [false, true, true, true],
        [true, true, true, false],
        [false, false, false, false]
    ];

    const secondStage = [
        [false, false, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [false, true, false, false]
    ];

    let data = [
        [false, false, false, false],
        [false, true, true, true],
        [true, true, true, false],
        [false, false, false, false]
    ];

    let conwayRules = new ConwayRules();

    data = conwayRules.applyRules(data);
    expect(data).toEqual(secondStage)

    data = conwayRules.applyRules(data);
    expect(data).toEqual(firstStage)
})