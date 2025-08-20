local it

return {
    Set = function(serviceBag)
        it = serviceBag
    end,
    Get = function()
        return it
    end
}