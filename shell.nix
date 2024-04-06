{ pkgs ? import <nixpkgs> {} }:

let lib = pkgs.lib;

in pkgs.mkShell (with pkgs; {
    buildInputs = [
        nodejs
        nodePackages.pnpm
    ];
})