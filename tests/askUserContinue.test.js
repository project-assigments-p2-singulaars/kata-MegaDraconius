import { describe, expect, it, spy } from "vitest";
import { askUserContinue } from "../src/js/functions.js";

describe("askUserContinue", () => {
  it("Should be a function", () => {
    // Verifica si askUserContinue es una función
    expect(typeof askUserContinue).toBe("function");
  });

  it("Should return true if the user click on Accept", () => {
    // Guardamos el valor original de window.confirm
    const originalConfirm = window.confirm;

    // Sobreescribimos window.confirm con una función que siempre devuelve true
    window.confirm = () => true;

    // Llamamos a la función que queremos probar
    const result = askUserContinue();

    // Restauramos window.confirm a su valor original
    window.confirm = originalConfirm;

    // Verificamos si la función devuelve true como se esperaba
    expect(result).toBe(true);
  });

  it("Should return false if the user click on Cancel", () => {
    // Guardamos el valor original de window.confirm
    const originalConfirm = window.confirm;

    // Sobreescribimos window.confirm con una función que siempre devuelve false
    window.confirm = () => false;

    // Llamamos a la función que queremos probar
    const result = askUserContinue();

    // Restauramos window.confirm a su valor original
    window.confirm = originalConfirm;

    // Verificamos si la función devuelve false como se esperaba
    expect(result).toBe(false);
  });
});
