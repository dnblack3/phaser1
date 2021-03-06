/**
 * [description]
 *
 * @function Phaser.Utils.Object.HasAny
 * @since 3.0.0
 *
 * @param {object} source - [description]
 * @param {string[]} keys - [description]
 *
 * @return {boolean} [description]
 */
var HasAny = function (source, keys)
{
    for (var i = 0; i < keys.length; i++)
    {
        if (source.hasOwnProperty(keys[i]))
        {
            return true;
        }
    }

    return false;
};

module.exports = HasAny;
