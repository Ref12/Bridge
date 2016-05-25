using Bridge;

namespace System
{
    [External]
    [Constructor("")]
    [Name("System.Nullable")]
    public struct Nullable<T> where T : struct
    {
        [Template("{0}")]
        public Nullable(T value)
        {
        }

        public bool HasValue
        {
            [Template("System.Nullable.hasValue({this})")]
            get
            {
                return false;
            }
        }

        public T Value
        {
            [Template("System.Nullable.getValue({this})")]
            get
            {
                return default(T);
            }
        }

        [Template("System.Nullable.getValueOrDefault({this}, {T:default})")]
        public T GetValueOrDefault()
        {
            return default(T);
        }

        [Template("System.Nullable.getValueOrDefault({this}, {0})")]
        public T GetValueOrDefault(T defaultValue)
        {
            return default(T);
        }

        public static implicit operator T? (T value)
        {
            return null;
        }

        [Template("System.Nullable.getValue({this})")]
        public static explicit operator T(T? value)
        {
            return default(T);
        }

        [Template("System.Nullable.equalsT({this}, {other})")]
        public override extern bool Equals(object other);

        [Template("System.Nullable.getHashCode({this})")]
        public override extern int GetHashCode();

        [Template("System.Nullable.toString({this})")]
        public override extern string ToString();
    }
}