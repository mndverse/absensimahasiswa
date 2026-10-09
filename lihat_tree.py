from pathlib import Path

folder = Path(".")

def tampilkan_tree(path, prefix=""):
    isi = sorted(
        [item for item in path.iterdir()
         if item.name not in {"node_modules", ".git", "dist"}],
        key=lambda item: (item.is_file(), item.name.lower())
    )

    for i, item in enumerate(isi):
        terakhir = i == len(isi) - 1
        simbol = "└── " if terakhir else "├── "

        print(prefix + simbol + item.name)

        if item.is_dir():
            prefix_baru = prefix + ("    " if terakhir else "│   ")
            tampilkan_tree(item, prefix_baru)

print(folder.resolve().name)
tampilkan_tree(folder)