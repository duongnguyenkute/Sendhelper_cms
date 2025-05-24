"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payload_1 = require("payload");
var path_1 = require("path");
var url_1 = require("url");
var db_postgres_1 = require("@payloadcms/db-postgres");
var payload_cloud_1 = require("@payloadcms/payload-cloud");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var sharp_1 = require("sharp");
var Users_1 = require("./collections/Users");
var Media_1 = require("./collections/Media");
var HomeTips_1 = require("./collections/HomeTips");
var filename = (0, url_1.fileURLToPath)(import.meta.url);
var dirname = path_1.default.dirname(filename);
exports.default = (0, payload_1.buildConfig)({
    admin: {
        user: Users_1.Users.slug,
        importMap: {
            baseDir: path_1.default.resolve(dirname),
        },
    },
    collections: [Users_1.Users, Media_1.Media, HomeTips_1.HomeTips],
    editor: (0, richtext_lexical_1.lexicalEditor)(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path_1.default.resolve(dirname, 'payload-types.ts'),
    },
    db: (0, db_postgres_1.postgresAdapter)({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp: sharp_1.default,
    plugins: [
        (0, payload_cloud_1.payloadCloudPlugin)(),
        // storage-adapter-placeholder
    ],
    cors: ['http://localhost:3001'],
    csrf: ['http://localhost:3001'],
});
