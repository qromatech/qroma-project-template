# based on code and comments found here: https://github.com/platformio/platform-espressif32/issues/1078

Import("env")
import os

APP_BIN = "$BUILD_DIR/${PROGNAME}.bin"
BOARD_CONFIG = env.BoardConfig()
# print(env.Dump())

print(dir(BOARD_CONFIG))
board_variant = BOARD_CONFIG.get("build.variant")
print("MERGING FIRMWARE FOR BOARD '" + board_variant + "'")

PROJECT_ID = "{{ qroma_project.project_id }}"
MERGED_BIN_FILENAME = f"{PROJECT_ID}-firmware-{board_variant}.bin"

MERGED_BIN = f"$BUILD_DIR/{MERGED_BIN_FILENAME}"
CHIP_FAMILY = BOARD_CONFIG.get("build.mcu", "esp32")


def merge_bin(source, target, env):
    # The list contains all extra images (bootloader, partitions, eboot) and
    # the final application binary
    flash_images = env.Flatten(env.get("FLASH_EXTRA_IMAGES", [])) + ["$ESP32_APP_OFFSET", APP_BIN]

    # Run esptool to merge images into a single binary
    env.Execute(
        " ".join(
            [
                "$PYTHONEXE",
                "$OBJCOPY",
                "--chip",
                CHIP_FAMILY,
                "merge_bin",
                # "--fill-flash-size",
                # BOARD_CONFIG.get("upload.flash_size", "4MB"),
                "-o",
                MERGED_BIN,
            ]
            + flash_images
        )
    )