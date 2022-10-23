import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter} from "../types";

let account1: SignerWithAddress;
let rest: SignerWithAddress[];

let greeter: Greeter;




describe("Greeter", function () {
  before(async () => {
    [account1, ...rest] = await ethers.getSigners();
    greeter = <Greeter>await (await ethers.getContractFactory("Greeter")).deploy("Hello there");
  });

  beforeEach(async () => {

  });

  describe("greeting change", () => {
    it("should change text", async () => {
      await greeter.connect(account1).setGreeting("oh hey");
      expect(await greeter.connect(account1).greet()).to.equal("oh hey");
    });

  });


});
