import { Effect } from "effect";

const addServiceCharge = (ammount: number): Effect.Effect<number, Error> =>
  Effect.succeed(ammount + 5);

const applyDiscount = (
  total: number,
  discountRate: number
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be Zero"))
    : Effect.succeed(total - (total * discountRate) / 100);

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100));
const fetchDiscountRate = Effect.promise(() => Promise.resolve(10));

const program = Effect.gen(function* () {
  const transactionAmount = yield* fetchTransactionAmount;
  const discountRate = yield* fetchDiscountRate;

  const total = yield* applyDiscount(transactionAmount, discountRate);
  const finalAmount = yield* addServiceCharge(total);

  return finalAmount;
});

Effect.runPromise(program)
  .then((result) => {
    console.log("Final Amount:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
